const KLAVIYO_BASE = "https://a.klaviyo.com/api";
const KLAVIYO_REVISION = "2024-10-15";

function klaviyoHeaders(apiKey: string): HeadersInit {
  return {
    Authorization: `Klaviyo-API-Key ${apiKey}`,
    revision: KLAVIYO_REVISION,
    accept: "application/json",
    "content-type": "application/json",
  };
}

export async function upsertProfile(email: string, apiKey: string): Promise<string> {
  const res = await fetch(`${KLAVIYO_BASE}/profiles/`, {
    method: "POST",
    headers: klaviyoHeaders(apiKey),
    body: JSON.stringify({
      data: { type: "profile", attributes: { email } },
    }),
  });

  if (res.status === 201) {
    const body = await res.json();
    return body.data.id as string;
  }

  if (res.status === 409) {
    const body = await res.json().catch(() => ({}));
    const existingId =
      body?.errors?.[0]?.meta?.duplicate_profile_id ??
      body?.meta?.duplicate_profile_id;
    if (typeof existingId === "string") return existingId;
    throw new Error(`Klaviyo 409 without duplicate_profile_id: ${JSON.stringify(body)}`);
  }

  const text = await res.text().catch(() => "");
  throw new Error(`Klaviyo profile upsert failed: ${res.status} ${text}`);
}

export async function addProfileToList(
  profileId: string,
  listId: string,
  apiKey: string
): Promise<void> {
  const res = await fetch(`${KLAVIYO_BASE}/lists/${listId}/relationships/profiles/`, {
    method: "POST",
    headers: klaviyoHeaders(apiKey),
    body: JSON.stringify({
      data: [{ type: "profile", id: profileId }],
    }),
  });

  if (res.status === 204 || res.status === 409) return;

  const text = await res.text().catch(() => "");
  throw new Error(`Klaviyo list-add failed: ${res.status} ${text}`);
}
