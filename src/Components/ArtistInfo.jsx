import { useEffect, useState } from "react";
import { useParams } from "react-router"
import axios from "axios";
import { Header } from "./Header";
import Graph from "./Graph";

export const ArtistInfo = () => {
    const  params  = useParams();
    
    const [data, setData] = useState();
    const [following, setFollowing] = useState(false);
    useEffect(() => {
        
        axios.get(`https://mocky.viberate.com/api/v1/${params.uuid}`)
		.then((res) => {
			
			setData(res.data.data);
		});

    },[params])
    
    const handleFollow = () => {
        setFollowing(!following)
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(window.location.href)
        alert('Link copied to clipboard')
   }
    return (
        <>
        <Header></Header>
       { data && <main className="main">


<section className="section section-artist-detail trending claimed">

    
    <div className="page">
    
        {/* Image */}
        <div className="col visual">
            <figure style={{backgroundImage: `url(${data.image})`}}>
                <figcaption>
                    <button className="btn btn-claim-music-id">Claim music_id</button>
                </figcaption>
            </figure>
        </div>
       {/* Image */}

        <div className="col-wrapper">

           {/* Artist info */}
            <div className="col info">

                <div className="col-content">
                
                    <div className="info-wrapper">

                        <div className="title-wrapper">
                            <button className="btn btn-solid border btn-booking-request">Booking Request</button>
                            <h1 className="title">
                                {data.name}
                                <div className="tooltip-wrapper">
                                { data.claimed ? <span className="profile-claimed">Profile claimed</span> : ''}
                                    <div className="tooltip">
                                        <h3>Vote for subgenres</h3>
                                        <p>Don’t agree with the subgenres? Add the ones you think are missing or vote for existing to get yours on top!</p>
                                        <div className="stats-sheet">
                                            {data.subgenres.map((item, index) => {
                                                 <div className="row" key={index}>
                                                 <h5>{item.name}</h5>
                                                 <div className="graph-line">
                                                     <span className="line" style={{width: "47%"}}>47%</span>
                                                 </div>
                                             </div>
                                            })}
                                            
                                        </div>
                                        <p>
                                        <button className="btn btn-shadow">Vote now</button>
                                        </p>
                                    </div>
                                </div>
                                
                               {data && data.trending ? <span className="trending-icon">Trending</span> : ''}
                            </h1>
                        </div>

                        <div className="row">
                           { following ? <button className="btn btn-save long" onClick={() => handleFollow()}>Following</button> : <button className="btn btn-save long" onClick={() => handleFollow()}>Follow</button>}
                            <button className="btn btn-share" onClick={() => {copyToClipboard()}}>
                                Share
                                <span>Link copied to clipboard</span>
                            </button>
                        </div>

                        <div className="row">
                            <label>Origin</label>
                            <a className="btn btn-filter-tag">{ data.country.name}</a>
                        </div>

                        <div className="row">
                            <label>Genre</label>
                            <span className="btn btn-filter-tag">{data.genre.name}</span>
                        </div>

                        <div className="row">
                            <label>Subgenres</label>
                            {data.subgenres.map((item, index) => {
                                return (
                                    <span className="btn btn-filter-tag" key={index}>{item.name}</span>
                                )
                                                
                            })}
                            
                            <div className="tooltip-wrapper">
                                <button className="btn btn-add">Add subgenre</button>
                                <div className="tooltip">
                                    <h3>Vote for subgenres</h3>
                                    <p>Don’t agree with the subgenres? Add the ones you think are missing or vote for existing to get yours on top!</p>
                                    <div className="stats-sheet">
                                    {data.subgenres.map((item, index) => {
                                        return (
                                            <div className="row" key={index}>
                                            <h5>{item.name}</h5>
                                            <div className="graph-line">
                                                <span className="line" style={{width: "47%"}}>47%</span>
                                            </div>
                                        </div>
                                        )
                                                        
                                    })}
                                        
                                    </div>
                                    <p>
                                        <button className="btn btn-shadow">Vote now</button>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Artist socials */}
                    <div className="footer-detail">
                        
                        <ul className="social-list">
                            {data.social_links.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <a href={item.link} className={`btn social-icon ${item.channel}`}>{item.channel}</a>
                                    </li>
                                )
                            })}
                            
                        </ul>

                        <div className="tooltip-wrapper">
                            <button className="btn btn-add">Add links</button>
                            <div className="tooltip">
                                <h3>Got more info?</h3>
                                <p>Add Place's links so everyone can see their social media highlights.</p>
                                <p>
                                    <button className="btn btn-shadow">Add links</button>
                                </p>
                            </div>
                        </div>

                    </div>
                    {/* Artist socials */}

                </div>

            </div>
            
            {/* Most popolar section */}
            <div className="col stats">
                    
                <Graph data={data.most_popular_in}></Graph> 
                <div className="col-content">
                
                    <div className="stats-sheet">
                        <label>Most popular in</label>
                        {data.most_popular_in.map((item, index) => {
                            return (
                                <div className="row" key={index}>
                                    <h5>{item.city}</h5>
                                    <div className="graph-line">
                                        <span className="line" style={{width: `${item.value}%`}}>{item.value}%</span>
                                </div>
                        </div>
                            )
                        })}
                       
                    </div>

                </div>

            </div>
            

        </div>

        <button className="btn btn-scroll-down">Scroll down</button>

    </div>
   

</section>


</main>}
        </>
    )
}