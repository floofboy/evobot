import { Client, Intents } from "discord.js";
import { Bot } from "./structs/Bot";

const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (_req: any, res: any) => res.type('html').send(html));

app.listen(port, () => console.log(`Render workaround listening on port ${port}!`));

const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>A title</title>
  </head>
  <body>
    <p>let's see if this works</p>
  </body>
</html>
`;

export const bot = new Bot(
  new Client({
    restTimeOffset: 0,
    intents: [
      Intents.FLAGS.GUILDS,
      Intents.FLAGS.GUILD_VOICE_STATES,
      Intents.FLAGS.GUILD_MESSAGES,
      Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
      Intents.FLAGS.DIRECT_MESSAGES
    ]
  })
);
