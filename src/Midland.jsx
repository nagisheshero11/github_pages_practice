import React from 'react'

export const Midland = () => {
  return (
    <div className='card_1 col-6  selection'>
            <div className='d-flex flex-row justify-content-start'>
              <button className='selection_btn'>All</button>
              <button className='selection_btn'>Songs</button>
              <button className='selection_btn'>Podcasts</button>
            </div>

            <div className='d-flex flex-column justify-content-start '>
                <div className='d-flex flex-row justify-content-center'>
                  <div className="album_fav_card">
                      <img src="/albums/Magadheera.jpg" alt="Magadheera Album" className="fav_albums" />
                    <h3 className="album_fav_text">Magadheera</h3>
                    <div className="justify-content-center">
                        <button className="album_play">
                            <i className="fa-solid fa-play"></i>
                        </button>
                    </div>
                  </div>
                  <div className="album_fav_card">
                      <img src="/albums/Alavikuntapuram lo.jpg" alt="Alavikuntapuram Lo" className="fav_albums" />
                    <h3 className="album_fav_text">Alavikuntapuram Lo</h3>
                    <div className="justify-content-center">
                        <button className="album_play">
                            <i className="fa-solid fa-play"></i>
                        </button>
                    </div>
                  </div>
                  <div className="album_fav_card">
                      <img src="/albums/Avara.jpg" alt="Avara" className="fav_albums" />
                    <h3 className="album_fav_text">Avara</h3>
                    <div className="justify-content-center">
                        <button className="album_play">
                            <i className="fa-solid fa-play"></i>
                        </button>
                    </div>
                  </div>
                </div>
                <div className='d-flex flex-row justify-content-center' >
                  <div className="album_fav_card" style={{ marginTop: '2px' }}  >
                      <img src="/albums/ZinNaMilDo.jpg" alt="Zindhaghi Dhobar Nahimilega" className="fav_albums" />
                    <h3 className="album_fav_text">Zindagi Na Milegi Dobara</h3>
                    <div className="justify-content-center">
                        <button className="album_play">
                            <i className="fa-solid fa-play"></i>
                        </button>
                    </div>
                  </div>
                  <div className="album_fav_card" style={{ marginTop: '2px' }} >
                      <img src="/albums/NaaPreuSurya.jpg" alt="Na Peru Surya" className="fav_albums" />
                    <h3 className="album_fav_text">Na Peru Surya</h3>
                    <div className="justify-content-center">
                        <button className="album_play">
                            <i className="fa-solid fa-play"></i>
                        </button>
                    </div>
                  </div>

                  <div className="album_fav_card" style={{ marginTop: '2px' }}  >
                      <img src="/albums/Animal.jpg" alt="Animal Album" className="fav_albums" />
                    <h3 className="album_fav_text">Animal Telugu</h3>
                    <div className="justify-content-center">
                      {
                        <button className="album_play">
                          <i className="fa-solid fa-play"></i>
                        </button> 
                      }
                    </div>
                  </div>
                </div>
            </div>


            <div>
              <h1 className="made-for-you-title">Made For You</h1>
              <p className='d-flex justify-content-end show-all'>Show All</p>
              <div className="made-for-you">
                <div className="made-for-you-container">
                <div className="made-for-you-card">
                    <img src="/albums/hiiNana.jpg" alt="Hi Nana" className="made-for-you-album" />
                    <p className="made-for-you-text">Hi Nana<br></br> <span >By Hesham Abdul Wahab</span> </p>
                </div>
                <div className="made-for-you-card">
                    <img src="/albums/Devara.jpg" alt="Devara Album" className="made-for-you-album" />
                    <p className="made-for-you-text">Devara<br></br> <span >By Anirudh</span> </p>
                </div>
                  <div className="made-for-you-card">
                    <img src="/albums/salar.jpg" alt="allTimeHindhi" className="made-for-you-album" />
                    <p className="made-for-you-text">Salaar Pt. 1 - Ceasefire<br></br> <span >By Ravi Basrur</span></p>
                  </div>
                  <div className="made-for-you-card">
                    <img src="/albums/GunturKaram.jpg" alt="Guntur Karam Album" className="made-for-you-album" />
                    <p className="made-for-you-text">Guntur Kaaram<br></br> <span >By S. Thaman</span> </p>
                  </div>
                  <div className="made-for-you-card">
                    <img src="/albums/Animal-2.jpg" alt="Animal Album" className="made-for-you-album" />
                    <p className="made-for-you-text">Animal ( Original Motion Picture Soundtrack ) . . .</p>
                  </div>

                  <div className="made-for-you-card">
                    <img src="/albums/justinBieber.jpg" alt="Another Album" className="made-for-you-album" />
                    <p className="made-for-you-text">Justin Bieber My World 2.0<br></br><span >By Music</span> </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h1 className="made-for-you-title">Today's Biggest Hits</h1>
              <p className='d-flex justify-content-end show-all'>Show All</p>
              <div className="made-for-you">
                <div className="made-for-you-container">
                <div className="made-for-you-card">
                    <img src="/albums/allTimeHindhi.jpg" alt="allTimeHindhi" className="made-for-you-album" />
                    <p className="made-for-you-text">All Time To 50 Songs Hindi<br></br> <span >By Music</span></p>
                  </div>
                <div className="made-for-you-card">
                    <img src="/albums/GunturKaram.jpg" alt="Guntur Karam Album" className="made-for-you-album" />
                    <p className="made-for-you-text">Guntur Kaaram<br></br> <span >By S. Thaman</span> </p>
                  </div>
                <div className="made-for-you-card">
                    <img src="/albums/hiiNana.jpg" alt="Hi Nana" className="made-for-you-album" />
                    <p className="made-for-you-text">Hi Nana<br></br> <span >By Hesham Abdul Wahab</span> </p>
                </div>
                <div className="made-for-you-card">
                    <img src="/albums/Devara.jpg" alt="Devara Album" className="made-for-you-album" />
                    <p className="made-for-you-text">Devara<br></br> <span >By Anirudh</span> </p>
                </div>

                <div className="made-for-you-card">
                    <img src="/albums/justinBieber.jpg" alt="Another Album" className="made-for-you-album" />
                    <p className="made-for-you-text">Justin Bieber My World 2.0<br></br><span >By Music</span> </p>
                  </div>
                  <div className="made-for-you-card">
                    <img src="/albums/Animal-2.jpg" alt="Animal Album" className="made-for-you-album" />
                    <p className="made-for-you-text">Animal ( Original Motion Picture Soundtrack ) . . .</p>
                  </div>

                </div>
              </div>
            </div>
          </div>
  )
}
