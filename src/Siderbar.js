import React from "react";
import "./Sidebar.css";
import SiderbarOption from "./SiderbarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { useDataLayerValue } from "./DataLayer";

function Siderbar() {
  const [{ playlists }, dispatch] = useDataLayerValue();
  return (
    <div className="sidebar">
      <img
        className="siderbar_logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Spotify_Logo"
      />
      <SiderbarOption Icon={HomeIcon} title="Home" />
      <SiderbarOption Icon={SearchIcon} title="Search" />
      <SiderbarOption Icon={LibraryMusicIcon} title="Your Library" />

      <br />
      <strong className="sidebar_title">PLAYLISTS</strong>
      <hr />

      {playlists?.items?.map((playlist) => (
        <SiderbarOption title={playlist.name} />
      ))}
    </div>
  );
}

export default Siderbar;
