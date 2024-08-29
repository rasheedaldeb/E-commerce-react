const GoogleMap = () => {
  return (
    <div className="map-area">
      <div className="maps">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.03617413464!2d-74.30934381071539!3d40.69753994533942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1724800467691!5m2!1sen!2s"
          style={{
            width: "600",
            height: "450",
            style: "border:0",
            allowfullscreen: "",
            loading: "lazy",
            referrerPolicy: "no-referrer-when-downgrade",
          }}
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMap;
