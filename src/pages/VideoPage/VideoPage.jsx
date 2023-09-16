import React from 'react'
import './VideoPage.css';
import vid from '../../components/Video/vid.mp4'
import LikeWatchLaterSaveBtns from './LikeWatchLaterSaveBtns';
import Comments from "../../components/Coments/Comments";
function VideoPage() {
    console.log(123);
  return (
    <>
      <div className="container_videoPage">
        <div className="container2_videoPage">
            <div className="video_display_screen_videoPage">
                <video src={vid} className={"video_ShowVideo_videoPage" }
              controls
              autoPlay
            ></video>
                    <div className="video_details_videoPage">
                     <div className="video_btns_title_VideoPage_cont">
                        <p className="video_title_VideoPage"> Title</p>
                       <div className="views_date_btns_VideoPage">
                       
                        <div className="views_videoPage">
                        5 Views <div className="dot"></div> upload 1 year ago
                        </div>
                      </div>
                     </div>

                     <LikeWatchLaterSaveBtns />

                       <div className="chanel_details_videoPage">
                        <b className="chanel_logo_videoPage">
                            <p>C</p>
                        </b>
                        <p className="chanel_name_videoPage">Chanel Name</p>
                       </div>
                        
                        <div className="comments_videoPage">
                            <h2>
                                <u>Comments</u>
                            </h2>
                            <Comments />
                        </div>


                </div>
            </div>

             <div className="more_VideoBar">
                More Videos
             </div>
        </div>
    </div>
    </>
  )
}

export default VideoPage;


