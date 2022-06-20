import { selectPeers, useHMSStore } from "@100mslive/react-sdk";
import VideoTile from "./VideoTile";

export default function Room() {
  const peers = useHMSStore(selectPeers);
  return (
    <div>
      <div>
        {peers.map((peer) => (
          <VideoTile key={peer.id} peer={peer} />
        ))}
      </div>
    </div>
  );
}
