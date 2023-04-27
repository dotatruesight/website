import { PropertySignature } from 'https://deno.land/x/ts_morph@16.0.0/ts_morph.js';
import { h, FunctionComponent } from 'preact';
import { useState, useEffect } from 'preact/hooks';

const WebSocketDisplay: FunctionComponent<{accountid: string}> = ({ accountid }) => {
  const [text, setText] = useState<string>('');

  useEffect(() => {
    const connectWebSocket = () => {
      // Replace this URL with your WebSocket server's address
      const websocketUrl = 'ws://dotatruesight.com/api/gsi?accountid='+accountid;
      const websocket = new WebSocket(websocketUrl);

      websocket.onmessage = (event: MessageEvent) => {
        setText(event.data);
      };

      websocket.onclose = () => {
        // Reconnect after a delay if the connection is lost
        setTimeout(() => connectWebSocket(), 5000);
      };

      return () => {
        websocket.close();
      };
    };

    const cleanup = connectWebSocket();
    return () => {
      cleanup();
    };
  }, []);

  return (
    <div>
      <h1>WebSocket Text</h1>
      <p>{text}</p>
    </div>
  );
};

export default WebSocketDisplay;