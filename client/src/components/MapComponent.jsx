

const MapComponent = () => {
    return <>
        <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <iframe
                src="https://www.google.com/maps/d/u/0/embed?mid=1wbgOvRlMgSNSoP1JZ7y3XhphOepS7ks&ehbc=2E312F"
                width="100%"
                height="480"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Embedded Google Map"
            ></iframe>
        </div>
    </>
}

export default MapComponent;
