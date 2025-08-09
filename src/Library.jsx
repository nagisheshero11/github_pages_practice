import React from 'react'
import "./LandingPage.css" 

export const Library = () => {
  return (
     <div className='card_1 col-3 '>
          <div className='library_container'>

          <div className='d-flex flex-row justify-content-between'> 
              <div className='d-flex flex-row justify-content-start'>
                <i className="fa-regular fa-folder-open icon icon_nav"></i>
                <p className='library_text'>Your Library</p>
              </div>
              <div className='d-flex flex-row justify-content-end'>
                <i className="fa-solid fa-plus icon icon_nav"></i>
                <i className="fa-solid fa-arrow-right icon icon_nav"></i>
              </div>
            </div>

            <div className='d-flex flex-row justify-content-start'>
              <button className='selection_btn'>Albums</button>
              <button className='selection_btn'>Playlist</button>
              <button className='selection_btn'>Podcasts</button>
              <button className='selection_btn'>Artists</button>
              <button className='selection_btn'>Downloaded</button>
            </div>

            <div className='d-flex flex-row justify-content-end'>
              <i className="fa-solid fa-magnifying-glass icon icon_nav"></i>
              <p className='show-all para'>Recents <span><i className="fa-solid fa-bars icon icon_nav"></i></span></p>
            </div>

            <div>
              <div className='play_list_card'>
                <div className='d-flex flex-row justify-content-start'>
                    <img src='/Icons_music_platform/likedalbum.png' alt='Liked Album' className='play_list_albums'/>
                    <div className="play_list_album_details">
                      <h4 className='artist_name play_list_album_title'>Liked Songs</h4>
                      <p className='role play_list_album_para'>
                        <span><i className="fa-solid fa-thumbtack playlist_pin" ></i></span>
                        Playlist • 100 songs
                      </p>
                   </div>
                </div>
              </div>
              <div className='play_list_card'>
                <div className='d-flex flex-row justify-content-start'>
                    <img src='/albums/allTimeHindhi.jpg' alt='Liked Album' className='play_list_albums'/>
                    <div className="play_list_album_details">
                      <h4 className='artist_name play_list_album_title'>All Time Top 50</h4>
                      <p className='role play_list_album_para'>
                        <span><i className="fa-solid fa-thumbtack playlist_pin" ></i></span>
                        Playlist • You
                      </p>
                   </div>
                </div>
              </div>

              <div className='play_list_card'>
                <div className='d-flex flex-row justify-content-start'>
                    <img src='/albums/Devara.jpg' alt='Liked Album' className='play_list_albums'/>
                    <div className="play_list_album_details">
                      <h4 className='artist_name play_list_album_title'>Devara</h4>
                      <p className='role play_list_album_para'>
                        Album • Anirudh Ravichander
                      </p>
                   </div>
                </div>
              </div>
              <div className='play_list_card'>
                <div className='d-flex flex-row justify-content-start'>
                    <img src='/albums/maatavinali.jpg' alt='Liked Album' className='play_list_albums'/>
                    <div className="play_list_album_details">
                      <h4 className='artist_name play_list_album_title'>Hari Hara Veera Mallu</h4>
                      <p className='role play_list_album_para'>
                        EP • M. M. Keeravaani
                      </p>
                   </div>
                </div>
              </div>
              <div className='play_list_card'>
                <div className='d-flex flex-row justify-content-start'>
                    <img src='/albums/salar.jpg' alt='Liked Album' className='play_list_albums'/>
                    <div className="play_list_album_details">
                      <h4 className='artist_name play_list_album_title'>Saalar</h4>
                      <p className='role play_list_album_para'>
                        Single • Ravi Basrur
                      </p>
                   </div>
                </div>
              </div>
              <div className='play_list_card'>
                <div className='d-flex flex-row justify-content-start'>
                    <img src='/albums/pushpa.jpg' alt='Liked Album' className='play_list_albums'/>
                    <div className="play_list_album_details">
                      <h4 className='artist_name play_list_album_title'>Pushpa</h4>
                      <p className='role play_list_album_para'>
                        EP • Devi Sri Prasad
                      </p>
                   </div>
                </div>
              </div>
              <div className='play_list_card'>
                <div className='d-flex flex-row justify-content-start'>
                    <img src='/albums/jersy.jpg' alt='Liked Album' className='play_list_albums'/>
                    <div className="play_list_album_details">
                      <h4 className='artist_name play_list_album_title'>Jersey</h4>
                      <p className='role play_list_album_para'>
                        Single • Anirudh Ravichander
                      </p>
                   </div>
                </div>
              </div>
              <div className='play_list_card'>
                <div className='d-flex flex-row justify-content-start'>
                    <img src='/albums/orange.jpg' alt='Liked Album' className='play_list_albums'/>
                    <div className="play_list_album_details">
                      <h4 className='artist_name play_list_album_title'>Orange</h4>
                      <p className='role play_list_album_para'>
                        Album • Harris Jayaraj
                      </p>
                   </div>
                </div>
              </div>
              <div className='play_list_card'>
                <div className='d-flex flex-row justify-content-start'>
                    <img src='/albums/Animal-2.jpg' alt='Liked Album' className='play_list_albums'/>
                    <div className="play_list_album_details">
                      <h4 className='artist_name play_list_album_title'>Animal</h4>
                      <p className='role play_list_album_para'>
                        EP • Manan Bhardwaj
                      </p>
                   </div>
                </div>
              </div>
              <div className='play_list_card'>
                <div className='d-flex flex-row justify-content-start'>
                    <img src='/albums/maharshi.jpg' alt='Liked Album' className='play_list_albums'/>
                    <div className="play_list_album_details">
                      <h4 className='artist_name play_list_album_title'>Maharshi</h4>
                      <p className='role play_list_album_para'>
                        EP • Devi Sri Prasad
                      </p>
                   </div>
                </div>
              </div>

              </div>




          </div>
        </div>
  )
}
