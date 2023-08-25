import { useEffect, useState } from "react";
import "./feed.css";
import feed from "./feedEvents.json";
import FeedCard from "./feed";

export default function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      //Access Token will expires in every 60 days, so either have to hard code past events or 
      // automate refreshing the access token.
      
      const res = await fetch("https://graph.instagram.com/me/media?access_token=IGQVJXYmVqc0sxNEM2V3hPbVlqLWZA3TUFIQnBEeS0wYW16UUtZAWWRxajRRcW80b01MSGVEZAkI4OUJsN0M0NVFhdkdVWXF5OGhmRVRqSmx3ejdpaG15ZA3lvZA3hoc2FpVHBoSXhtYVhwRDY1eW1hNXpZAeQZDZD&fields=caption,id,media_type,media_url,permalink,thumbnail_url,timestamp");
      const data = await res.json();
      setPosts(data.data || feed);
    }
    getPosts();
  }, []);
  return (
    <>
      <section className="feed-section">
        <div className="title">Our Feed</div>
        <div className="content">Follow us on <a href="https://instagram.com/gdsc_nsut" rel="noreferrer" target="_blank" >@GDSC_NSUT</a> and stay tuned in to our upcoming events and announcements.</div>
        <div className="feeds">
          {
            posts.map((post) => (
              <FeedCard permalink={post.permalink} media_type={post.media_type} media_url={post.media_url || ""} caption={post.caption} thumbnail_url={posts.thumbnail_url} alt={post.alt} />
            ))
          }
        </div>
      </section >
    </>
  )
}