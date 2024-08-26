
import ImagenCalendar from '../img/1.jpg'

const Blog = () => {
    

    return (
        <>
            <main className="blog" id="blog">
                
               
                <article className="entrada">
                    <div className="entrada__imagen">
                        <picture>
                            <source loading="lazy" srcSet={ImagenCalendar} type="image/webp" />
                            <img loading="lazy" src={ImagenCalendar} alt="imagen blog" />
                        </picture>
                    </div>
                </article>
            </main>
            
        </>
    );
};

export default Blog;
