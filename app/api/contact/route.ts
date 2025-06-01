import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const nombre = formData.get("nombre") as string;
    const email = formData.get("email") as string;
    const telefono = formData.get("telefono") as string;
    const nivel = formData.get("nivel") as string;
    const mensaje = formData.get("mensaje") as string;

    if (!nombre || !email || !nivel || !mensaje) {
      return new Response(
        `<!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta http-equiv="refresh" content="3;url=/contacto">
            <title>Error - Formulario incompleto</title>
          </head>
          <body style="font-family: Arial, sans-serif; text-align: center; padding: 50px;">
            <h2 style="color: #d91c1c;">Error: Faltan campos obligatorios</h2>
            <p>Sera redirigido al formulario en 3 segundos...</p>
            <a href="/contacto" style="color: #0a2d8f;">Volver al formulario</a>
          </body>
        </html>`,
        {
          status: 400,
          headers: { "Content-Type": "text/html; charset=utf-8" },
        }
      );
    }

    const emailSubject = `Nueva consulta de ${nombre} - ${nivel}`;

    try {
      const emailPayload = {
        to: "jlofredo@muvinai.com",
        subject: emailSubject,
        html: `
          <h2>Nueva consulta desde el sitio web</h2>
          <p><strong>Nombre:</strong> ${nombre}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefono:</strong> ${telefono || "No proporcionado"}</p>
          <p><strong>Nivel:</strong> ${nivel}</p>
          <p><strong>Mensaje:</strong><br>${mensaje}</p>
          <p><strong>Fecha:</strong> ${new Date().toLocaleString("es-AR", {
            timeZone: "America/Argentina/Buenos_Aires",
          })}</p>
        `,
      };

      const emailResponse = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_ACCESS_KEY_HERE",
          name: nombre,
          email: email,
          subject: emailSubject,
          message: `
Nombre: ${nombre}
Email: ${email}
Telefono: ${telefono || "No proporcionado"}
Nivel: ${nivel}
Mensaje: ${mensaje}
Fecha: ${new Date().toLocaleString("es-AR", {
            timeZone: "America/Argentina/Buenos_Aires",
          })}
          `,
          from_name: "Colegio Corazon de Jesus",
          to: "jlofredo@muvinai.com",
        }),
      });

      console.log("Email response status:", emailResponse.status);
    } catch (emailError) {
      console.error("Error sending email:", emailError);
    }

    return new Response(
      `<!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Mensaje enviado</title>
          <style>
            body { 
              font-family: Arial, sans-serif; 
              text-align: center; 
              padding: 50px; 
              background-color: #f8f9fa;
            }
            .container {
              max-width: 500px;
              margin: 0 auto;
              background: white;
              padding: 40px;
              border-radius: 10px;
              box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
            h2 { 
              color: #0a2d8f; 
              margin-bottom: 20px;
            }
            .checkmark {
              color: #28a745;
              font-size: 3em;
              margin-bottom: 20px;
            }
            .button {
              display: inline-block;
              color: white;
              background-color: #0a2d8f;
              text-decoration: none;
              padding: 12px 24px;
              border-radius: 5px;
              margin-top: 20px;
              transition: background-color 0.3s;
            }
            .button:hover {
              background-color: #081d5e;
            }
            p {
              margin-bottom: 15px;
              line-height: 1.5;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="checkmark">✓</div>
            <h2>Gracias por ponerse en contacto!</h2>
            <p>Hemos recibido su consulta sobre <strong>${nivel}</strong>.</p>
            <p>Nos pondremos en contacto con usted a la brevedad.</p>
            <a href="/" class="button">Volver al inicio</a>
          </div>
        </body>
      </html>`,
      {
        status: 200,
        headers: { "Content-Type": "text/html; charset=utf-8" },
      }
    );
  } catch (error) {
    console.error("Error processing form:", error);
    return new Response(
      `<!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta http-equiv="refresh" content="3;url=/contacto">
          <title>Error en el servidor</title>
        </head>
        <body style="font-family: Arial, sans-serif; text-align: center; padding: 50px;">
          <h2 style="color: #d91c1c;">Error en el servidor</h2>
          <p>Ha ocurrido un error al procesar su mensaje. Por favor, intente nuevamente.</p>
          <p>Sera redirigido al formulario en 3 segundos...</p>
          <a href="/contacto" style="color: #0a2d8f;">Volver al formulario</a>
        </body>
      </html>`,
      {
        status: 500,
        headers: { "Content-Type": "text/html; charset=utf-8" },
      }
    );
  }
}
