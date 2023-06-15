import React from 'react'

const NewsCard= (props)=> {


    const {title, description, imageUrl, url,author, date} = props;

    return (
    <div className={`card bg-secondary-${props.theme}`}>
      
        <img src={!imageUrl?'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYN09MsHDipPCV4-D-ECTD1y-HLUOA9eSy_g&usqp=CAU':imageUrl} alt="card" className='card-img' />

        <div className={`card-body`}>
            <h5 className='card-title'>{title}</h5>
            <p className="card-text">{description}{description.length>100?"...":""}</p>
            <p className='card-text'><small>By {!author?"Unkown":author} <br/> {new Date(date).toUTCString()}</small></p>
            <a href={url} target='_blank' rel='noreferrer' className={`btn btn-primary`}>Read more</a>
        </div>
    </div>
    
    )
  
}

export default NewsCard;