import React from 'react'

export const Current = () => {
  return (
    <div className='card_1 col-3 currently_playing'>
            <div className='currently_playing_container'>
              <div className='content_wrapper d-flex flex-column justify-content-start align-items-center text-center'>
                <div className='d-flex flex-row justify-content-between align-items-left w-100 px-3'>
                  <h4 className='library_text'>Varadha's One Man Army - Salaar</h4>
                  <div className='icon_group d-flex'>
                    <i className="fa-solid fa-ellipsis options_icon" title="More options"></i>
                    <i className="fa-solid fa-x close_icon" title="Close"></i>
                  </div>
                </div>
                <div >
                  <img src="/albums/salar.jpg" alt="Salaar Album Cover" className="currently_album" />
                </div>
                <div className='track_details'>
                <div className="song_info">
                  <h4 className='track_title'>Varadha's One Man Army</h4>
                </div>
                <p className='artist_name'>Ravi Basrur</p>
              </div>
              </div>

              <div className='credits_section'>
                  <h4 className='credits_title'>Credits</h4>
                  <div className='credits_content'>
                    <div className='credits_item d-flex flex-column justify-content-start'>
                      <div className='d-flex flex-row justify-content-between align-items-center'>
                        <h3 className='artist_name'>Ravi Basrur</h3>
                        <p className='show-all'>Show all</p>
                      </div>
                      <h4 className='role'>Main Artist, Composer</h4>
                      <button className='follow_button'>Follow</button>
                    </div>
                  </div>
                </div>

                <div className='queue_section'>
                  <h4 className='queue_title'>Queue</h4>
                  <div className='queue_content'>
                    <div className='queue_item d-flex flex-row justify-content-between align-items-center'>
                      <div className='queue_info'>
                        <h4 className='queue_track_title'>Adiga Adiga - Ninnu Kori</h4>
                        <p className='queue_artist_name'>Sid Sriram</p>
                      </div>
                      <i className="fa-solid fa-minus queue_options_icon" title="More options"></i>
                    </div>
                    <div className='queue_item d-flex flex-row justify-content-between align-items-center'>
                    <div className='queue_info'>
                        <h4 className='queue_track_title'>Rock On Bro - Janatha Garage</h4>
                        <p className='queue_artist_name'>Ragu Dixit</p>
                      </div>
                      <i className="fa-solid fa-minus queue_options_icon" title="More options"></i>
                    </div>
                  </div>
                </div>
            </div>
          </div>
  )
}

