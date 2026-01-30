import { useEffect } from 'react';

const InstagramEmbed = () => {
    useEffect(() => {
        // Load Instagram Embed Script
        const script = document.createElement('script');
        script.src = "//www.instagram.com/embed.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    return (
        <div className="w-full flex justify-center">
            <blockquote
                className="instagram-media"
                data-instgrm-captioned
                data-instgrm-permalink="https://www.instagram.com/reel/DT8WufXjM28/?utm_source=ig_embed&amp;utm_campaign=loading"
                data-instgrm-version="14"
                style={{
                    background: '#FFF',
                    border: 0,
                    borderRadius: '12px',
                    boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                    margin: '1px',
                    maxWidth: '540px',
                    minWidth: '326px',
                    padding: 0,
                    width: 'calc(100% - 2px)'
                }}
            >
                <div style={{ padding: '16px' }}>
                    {/* Simplified content for SEO/Fallback */}
                    <a href="https://www.instagram.com/reel/DT8WufXjM28/?utm_source=ig_embed&amp;utm_campaign=loading" style={{ background: '#FFFFFF', lineHeight: 0, padding: '0 0', textAlign: 'center', textDecoration: 'none', width: '100%' }} target="_blank" rel="noreferrer">
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', flexGrow: 0, height: '40px', marginRight: '14px', width: '40px' }}></div>
                            <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' }}>
                                <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', marginBottom: '6px', width: '100px' }}></div>
                                <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', width: '60px' }}></div>
                            </div>
                        </div>
                        <div style={{ padding: '19% 0' }}></div>
                        <div style={{ color: '#c9c8cd', fontFamily: 'Arial,sans-serif', fontSize: '14px', fontStyle: 'normal', fontWeight: 'normal', lineHeight: '17px' }}>
                            A post shared by Max (@maxvsfood_)
                        </div>
                    </a>
                </div>
            </blockquote>
        </div>
    );
};

export default InstagramEmbed;
