import React, { useEffect } from "react";
import Styles from "../styles/pages/ProfilePage.module.css";
import { Link, useNavigate } from "react-router-dom";
import AsideBar from "../components/AsideBar/AsideBar";

const ProfilePage = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, []);
  return (
    <div className={Styles.homePage}>
      <AsideBar />

      <div className={Styles.container}>
        <div className={Styles.leftContainer}>
          <div className={Styles.topdiv}>
            <div className={Styles.backbtnDiv}>
              <Link to={"/home"}>
                <i class="fa-solid fa-arrow-left-long"></i>
              </Link>
            </div>
            <div className={Styles.nameDiv}>
              <span className={Styles.Name}>amit</span>
              <span className={Styles.post}>0 posts</span>
            </div>
          </div>

          <div className={Styles.informationDiv}>
            <div className={Styles.bannerDiv}>
              <img
                src="https://c4.wallpaperflare.com/wallpaper/268/96/863/anime-clouds-artwork-sky-wallpaper-preview.jpg"
                alt="sorry"
              />
              <div className={Styles.userPfp}>
                <img
                  src="https://c4.wallpaperflare.com/wallpaper/268/96/863/anime-clouds-artwork-sky-wallpaper-preview.jpg"
                  alt="img"
                />
              </div>
            </div>

            <div className={Styles.infoDiv}>
              <div className={Styles.editDiv}>
                <Link className={Styles.editProfileDiv}>
                  <span> Set up profile</span>
                </Link>
              </div>
              <div className={Styles.nameidContainer}>
                <span className={Styles.Name}>Amit</span>
                <span className={Styles.id}>@AmitSharma7424</span>
              </div>

              <div className={Styles.dateOfBirth}>
                <span>
                  <i class="fa-solid fa-calendar-days"></i>&nbsp; Joined January 2024
                </span>
              </div>
              <div className={Styles.fameDiv}>
                  <span><p>8</p> Following</span>
                  <span><p>0</p> Followers</span>
                </div>
            </div>
            <div className={Styles.lastDiv}>
          <Link className={Styles.links}>Posts</Link>
          <Link className={Styles.links}>Replies</Link>
          <Link className={Styles.links}>Highlights</Link>
          <Link className={Styles.links}>Media</Link>
          <Link className={Styles.links}>Likes</Link>
        </div>
          </div>
          <div className={Styles.bottomContainer}></div>
        </div>
        <div className={Styles.rightContainer}>right</div>

      </div>
    </div>
  );
};

export default ProfilePage;
