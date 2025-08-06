"use client";

const SPREADSHEET_ID = "1Vdjic6VsYDF7uHQ4g020wkTXQ35GJAqOAQEMhVtOVSg";

const serviceAccountKey = {
  type: "service_account",
  project_id: "corazon-de-jesus-461513",
  private_key_id: "04c9439861b3aef2b918fefec8cfaecb6cd8bb81",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCRr5ypB4YIYyS5\nliiRfm05XTuCPPWJd9UL6S6fl9YdCT7qaYEXcEkvglLq6DsZ/DwbJP21Go8N76bn\naL2aUyelmiM4/c/lJ7AYb4F7hBD/NmDGOkYHwqEQT+Z5bpFT+Flu5SE+zI0zvp+h\n8sXU78TEoWdKtkl8ruswcD4x08JEllKl9oBk6bhnj7vDPFSgsOtkrmHPDVuHuRFK\nr8HXSWiEvMU7SR0WSxKkuc1JJqXtT/oktkRRShuB7YICCoghGtbd1Oy5Xm72L5S9\nh72cqatDGSeVtsBC2BF3CVKpFMHPmmpGpkRMqf9wnDeGCCtQNOwQbp0tR3CqS1XA\nVRy2TIG9AgMBAAECggEAAqt2Mn7JzQOMG76NtcTcWY3E1mkpksBYbiRyz0foC5Ys\nyfzu+a/8F1vLCzUASESgEVtHLvdyoa2/oEQCHX7inh1KAfRcx/VHO9tnQw0zhonH\nkjplKCU/8F2Weqk1DpXhha+7QTxcZhNbN4uMZo+SSowuqWbXx+ooszWLXjxkNf+I\nJAxBebhF4UE0JZzl7P85jmGJkbGaEH+6dUsLFSTsP+boyw1bAaJaR606/VT12oRC\nEwZfLTJQhVaEVZVmFex9xosGOR8LsQFEln6GHRULrR6iA7UZ9xiE5Xjobpb2T2uk\n2raIM2gT7EHegibMuKSi3plXZPqUcsGsOB+Yhnr7/QKBgQDKvauWFdNmJPzAhDKE\nNIihN4NBLyDpFr5/bF9LJfzhMz121s7bdmRHiULl0Y6dRG19gO5KOhQ4RqildUEw\ncxKsGmcI1w5cSNuQAFIgedgdNDlz0CPIPO1GF6ULgjw2NXp42x48tdbzc+d09vPS\nAxQ6txNXSFzU5I6hfsf0cp9okwKBgQC39P9YupJAB4MfTwPxsnd3PH7og/a65I2o\nCDL30zCFb/HV97yJCLKWqiuEp/2raLN3drXQ1Jnq+qy8+0IPI1uTM84Sv0xGrR+r\nQ6/V6105L9jaR8mbQiMRt0DqHBqlGWN0b0kqxd9W8k5IM/8PdHw9jiyX5BG88/dT\nvW8tXSVubwKBgHyHumCK8Xm5WGLsEJdyKUZVcdLVHvLtXH+qUnI3WDf/oE5hrVfS\nRdBG+Idvi5kAEfzX+AYx3H+grzBKcItQ83QxF36vkguPWQX/nHKERQHTNUL04zW4\nbsnx9he2nENz39FiThVeYDTTyaTnl2Y1K/TQxRmEwjimVxHNbQaybUXvAoGAbV5o\nAiTKlu7gcljUC3sDtAxvl2X95xfDcMePJfCVxH/N1Fy55u8Y3qLFxNTr6GETck9N\nwZ7k8+Odl636lG19IIOIXXUGsG51ialwfUq13i4oS36qyngDyaCeI5IZ9Vam3q7b\nXWbPZi4hhKQFXPbwdth0gsnCEgkqXssdsmbSvlkCgYEAjdIoNKL6hubPQmj95m6P\nAqGcOUa8D6G5Xdyq9PgeEM+K6T1A4XxanHb7ccb2MoNyEGQyMPfhBDZLxnRc9UAv\n/g1Y5gc+T6AyDud6+Jtr0eeNQC6mbq5ZVZg/qAAJwGzHr76eK4syshzRKZLokATD\nZnSu/vdRCF3WFBqYEsD+pwQ=\n-----END PRIVATE KEY-----\n",
  client_email:
    "corazondejesus@corazon-de-jesus-461513.iam.gserviceaccount.com",
  client_id: "106642323009306797570",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/corazondejesus%40corazon-de-jesus-461513.iam.gserviceaccount.com",
  universe_domain: "googleapis.com",
};

let accessToken: string | null = null;
let tokenExpiry: number = 0;

async function getAccessToken(): Promise<string> {
  if (accessToken && Date.now() < tokenExpiry) {
    return accessToken;
  }

  try {
    const jwt = await createJWT();
    const response = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
        assertion: jwt,
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to get access token: ${response.statusText}`);
    }

    const data = await response.json();
    accessToken = data.access_token;
    tokenExpiry = Date.now() + data.expires_in * 1000 - 60000; // 1 minuto antes de expirar

    return accessToken!;
  } catch (error) {
    throw error;
  }
}

async function createJWT(): Promise<string> {
  const header = {
    alg: "RS256",
    typ: "JWT",
  };

  const now = Math.floor(Date.now() / 1000);
  const payload = {
    iss: serviceAccountKey.client_email,
    scope: "https://www.googleapis.com/auth/spreadsheets.readonly",
    aud: "https://oauth2.googleapis.com/token",
    exp: now + 3600,
    iat: now,
  };

  const encodedHeader = btoa(JSON.stringify(header))
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
  const encodedPayload = btoa(JSON.stringify(payload))
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");

  const unsignedToken = `${encodedHeader}.${encodedPayload}`;

  const signature = await signString(
    unsignedToken,
    serviceAccountKey.private_key
  );

  return `${unsignedToken}.${signature}`;
}

async function signString(data: string, privateKey: string): Promise<string> {
  const pemKey = privateKey.replace(/\\n/g, "\n");

  const keyData = pemKey
    .replace("-----BEGIN PRIVATE KEY-----", "")
    .replace("-----END PRIVATE KEY-----", "")
    .replace(/\s/g, "");

  const binaryKey = atob(keyData);
  const keyBytes = new Uint8Array(binaryKey.length);
  for (let i = 0; i < binaryKey.length; i++) {
    keyBytes[i] = binaryKey.charCodeAt(i);
  }

  const cryptoKey = await crypto.subtle.importKey(
    "pkcs8",
    keyBytes,
    {
      name: "RSASSA-PKCS1-v1_5",
      hash: "SHA-256",
    },
    false,
    ["sign"]
  );

  const signature = await crypto.subtle.sign(
    "RSASSA-PKCS1-v1_5",
    cryptoKey,
    new TextEncoder().encode(data)
  );

  const signatureArray = new Uint8Array(signature);
  const signatureString = String.fromCharCode(...signatureArray);

  return btoa(signatureString)
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

async function fetchSheetData(range: string): Promise<any[]> {
  try {
    const token = await getAccessToken();
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${range}`;

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data.values || [];
  } catch (error) {
    return [];
  }
}

export async function getNoticiasClient() {
  try {
    const rows = await fetchSheetData("noticias!A:Z");

    if (!rows || rows.length < 4) {
      return [];
    }

    const noticias = [];
    const maxCols = Math.max(
      ...rows.slice(0, 4).map((row: any[]) => (row ? row.length : 0))
    );

    for (let col = 0; col < maxCols; col++) {
      const titulo = rows[0]?.[col]?.trim() || "";
      const texto = rows[1]?.[col]?.trim() || "";
      const imagen = rows[2]?.[col]?.trim() || "";
      const checkbox = rows[3]?.[col] || "";

      const activo =
        checkbox === "TRUE" ||
        checkbox === "true" ||
        checkbox === true ||
        checkbox === "✓" ||
        checkbox === "1" ||
        checkbox === 1;

      if (activo && titulo !== "") {
        noticias.push({
          id: (col + 1).toString(),
          titulo,
          resumen: texto,
          fecha: new Date().toISOString().split("T")[0],
          imagen: imagen || "/placeholder.svg?height=300&width=500",
          contenido: texto,
          categoria: "Institucional",
        });
      }
    }

    return noticias;
  } catch (error) {
    return [];
  }
}

export async function getPopupDataClient() {
  try {
    const rows = await fetchSheetData("noticias!B10:B12");

    if (!rows || rows.length < 3) {
      return null;
    }

    const checkbox = rows[0]?.[0] || "";
    const title = rows[1]?.[0]?.trim() || "";
    const text = rows[2]?.[0]?.trim() || "";

    const activo =
      checkbox === "TRUE" ||
      checkbox === "true" ||
      checkbox === true ||
      checkbox === "✓" ||
      checkbox === "1" ||
      checkbox === 1;

    if (activo && title && text) {
      return {
        active: true,
        title: title,
        message: text,
        buttonText: "Más información",
        buttonLink: "/contacto",
        imagen: null,
      };
    }

    return null;
  } catch (error) {
    return null;
  }
}

export async function getAnunciosClient() {
  try {
    const rows = await fetchSheetData("anuncios!A:Z");

    if (!rows || rows.length < 10) {
      return [];
    }

    const anuncioRow = rows[9];
    const activo =
      anuncioRow[2] === "TRUE" ||
      anuncioRow[2] === "true" ||
      anuncioRow[2] === true;

    if (activo && anuncioRow[3]) {
      return [
        {
          active: true,
          title: anuncioRow[3] || "Anuncio",
          message: anuncioRow[4] || "",
          buttonText: "Más información",
          buttonLink: "/contacto",
          imagen: anuncioRow[5] || null,
        },
      ];
    }

    return [];
  } catch (error) {
    return [];
  }
}
