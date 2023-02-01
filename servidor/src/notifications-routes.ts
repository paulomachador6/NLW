import WebPush from 'web-push';
import { FastifyInstance } from 'fastify';
import { z } from 'zod';

//console.log(WebPush.generateVAPIDKeys())

const publicKey = 'BIzFobKJE-xDUVFYLKd8HjZugk1XOOxySeNtku0s_j6LsrEwpcqZwDR9FoawLwLLvftP2vs51FxFh2vMEsn24xc';
const privateKey = 'qzKU4MYbIfyuOHIv1Q5bsdrKCDEeXf1KolNb0Vws-lc';

WebPush.setVapidDetails('http://localhost:3333', publicKey, privateKey);

export async function notificationsRoutes(app: FastifyInstance) {
  app.get('/push/public_key', () => {
    return {
      publicKey,
    }
  })

  app.post('/push/register', (request, reply) => {
    console.log(request.body)

    return reply.status(201).send()
  })

  app.post('/push/send', async (request, reply) => {
    const sendPushBody = z.object({
      subscription: z.object({
        endpoint: z.string(),
        keys: z.object ({
          p256dh: z.string(),
          auth: z.string(),
        }),
       })
    })

    const { subscription } = sendPushBody.parse(request.body);

    setTimeout(() => {
      WebPush.sendNotification(subscription, 'HELLO DO BACKEND');
    },5000)

    return reply.status(201).send()
  })
}