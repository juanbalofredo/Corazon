let sheets: any = null;

if (typeof window === "undefined") {
  try {
    const { GoogleAuth } = require("google-auth-library");
    const { google } = require("googleapis");

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

    if (serviceAccountKey) {
      const credentials = serviceAccountKey;

      const auth = new GoogleAuth({
        credentials: credentials,
        scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
      });

      sheets = google.sheets({ version: "v4", auth });
    }
  } catch (error) {
    // Error silencioso para evitar romper la app si no hay credenciales configuradas
  }
}

const SPREADSHEET_ID = "1Vdjic6VsYDF7uHQ4g020wkTXQ35GJAqOAQEMhVtOVSg";

export async function getSheetData(sheetName: string) {
  if (!sheets) {
    return [];
  }

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: `${sheetName}!A:Z`,
    });

    const rows = response.data.values;
    if (!rows || rows.length === 0) {
      return [];
    }

    if (sheetName === "anuncios") {
      if (rows.length >= 10) {
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
      }
      return [];
    }

    if (sheetName === "noticias") {
      const noticias = [];

      if (rows.length >= 4) {
        const maxCols = Math.max(
          ...rows.slice(0, 4).map((row: any[]) => (row ? row.length : 0))
        );

        for (let col = 0; col < maxCols; col++) {
          const titulo = rows[0] && rows[0][col] ? rows[0][col].trim() : "";
          const texto = rows[1] && rows[1][col] ? rows[1][col].trim() : "";
          const imagen = rows[2] && rows[2][col] ? rows[2][col].trim() : "";
          const checkbox = rows[3] && rows[3][col] ? rows[3][col] : "";

          const activo =
            checkbox === "TRUE" ||
            checkbox === "true" ||
            checkbox === true ||
            checkbox === "✓" ||
            checkbox === "1" ||
            checkbox === 1 ||
            (typeof checkbox === "boolean" && checkbox);

          if (activo && titulo && titulo !== "") {
            noticias.push({
              id: (col + 1).toString(),
              titulo: titulo,
              resumen: texto || "",
              fecha: new Date().toISOString().split("T")[0],
              imagen: imagen || "/placeholder.svg?height=300&width=500",
              contenido: texto || "",
              categoria: "Institucional",
            });
          }
        }
      }

      return noticias;
    }

    return [];
  } catch (error) {
    return [];
  }
}

// Datos estáticos para la exportación
const noticiasEstaticas: any[] = [];

const anunciosEstaticos: any[] = [];

const popupEstatico: any = null;

export async function getPopupData() {
  if (process.env.NODE_ENV === "production") {
    return popupEstatico;
  }

  if (!sheets) {
    return null;
  }

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: `noticias!B10:B12`,
    });

    const rows = response.data.values;
    if (!rows || rows.length < 3) {
      return null;
    }

    const checkbox = rows[0] && rows[0][0] ? rows[0][0] : "";
    const title = rows[1] && rows[1][0] ? rows[1][0].trim() : "";
    const text = rows[2] && rows[2][0] ? rows[2][0].trim() : "";

    const activo =
      checkbox === "TRUE" ||
      checkbox === "true" ||
      checkbox === true ||
      checkbox === "✓" ||
      checkbox === "1" ||
      checkbox === 1 ||
      (typeof checkbox === "boolean" && checkbox);

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

export async function getNoticias() {
  try {
    const data = await getSheetData("noticias");
    return data;
  } catch (error) {
    return noticiasEstaticas;
  }
}

export async function getAnuncios() {
  // En producción con hosting estático, retornamos datos estáticos
  if (process.env.NODE_ENV === "production") {
    return anunciosEstaticos;
  }

  // Código original para desarrollo
  try {
    const data = await getSheetData("anuncios");
    return data.map((row: any, index: number) => ({
      id: (index + 1).toString(),
      titulo: row[0] || "",
      contenido: row[1] || "",
      activo: row[2] === "TRUE" || row[2] === "true" || row[2] === "1",
      fecha: row[3] || new Date().toISOString().split("T")[0],
    }));
  } catch (error) {
    return anunciosEstaticos;
  }
}
