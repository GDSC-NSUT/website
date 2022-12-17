import { useEffect, useState } from "react";
import "./feed.css";

export default function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch("https://graph.instagram.com/me/media?access_token=IGQVJYcWZAPenhVUF94MU5zZAzdTaWt0RHEwWXBCcUJzWUJTZA3p4UWt1YVpOLXNoRllFa1hvZA3YzekZArVmZAnNlNlQTFjYjRlZAXVmaDlNTmZAmbnJ0YnFmS2ltN2txOHB2Y1NYaVdwUmd3&fields=caption,id,media_type,media_url,permalink,thumbnail_url,timestamp");
      const data = await res.json();
      setPosts(data.data);
      console.log(data.data);
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
              <div className="feed">
                <a href={post.permalink} target="_blank" rel="noreferrer" >
                  <img src={post.media_type !== "VIDEO" ? post.media_url : post.thumbnail_url} alt={post.caption} />
                </a>
              </div>
            ))
          }
        </div>
      </section>
    </>
  )
}