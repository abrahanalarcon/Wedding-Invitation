import  { useEffect, useRef } from 'react';
import ImagenCalendar from '../img/1.jpg';

const Blog = () => {
    const articleRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fadeInUp');
                    }
                });
            },
            {
                threshold: 0.1, // Se activa la animación cuando el 10% del elemento es visible
            }
        );

        if (articleRef.current) {
            observer.observe(articleRef.current);
        }

        return () => {
            if (articleRef.current) {
                observer.unobserve(articleRef.current);
            }
        };
    }, []);

    return (
        <>
            <main className="blog" id="blog">
                <article className="entrada" ref={articleRef}>
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
