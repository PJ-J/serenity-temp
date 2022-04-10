import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const ArticleDetails = () => {
  const { articleid } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetch(`https://www.reddit.com/r/meditation/${articleid}.json`)
      .then((res) => res.json())
      .then((res) => setArticle(res))
  }, [])

  return (
    // <main className='container'>
    //   <section className='row justify-content-center mt-5'>

    //     <div className='col-md-6' key={article.data.children.data?.id}>
        
    //       <div className='card shadow my-2'>
    //       {/* <img src={article?.movie_banner} className="card-img-top" alt="..." /> */}
    //         <div className='card-body'>
    //           <h4 className='card-title'>{article.data.children.data.title}</h4>
    //           {/* <p className='card-subtitle text-muted'>{article?.original_title}</p> */}
    //           <p className="card-text">{article.data.children.data.selftext}</p>
    //           <Link to="/articles" className="btn btn-secondary">Go Back</Link>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </main>
    <h1>Article details</h1>
  )
}


export default ArticleDetails;