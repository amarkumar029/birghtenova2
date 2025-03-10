"use client";

function MapEmbed() {
  return (
    <section className="container mb-8">
      <div className="text-center mb-2">
        <h2 className="text-4xl font-bold">LOCATE A SCHOOL</h2>
        <div className="title-border"></div>
      </div>
      <div style={{ width: "100%", height: "460px", overflow: "hidden" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3609.953900924707!2d85.74192717538206!3d25.20477707770612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDEyJzE3LjIiTiA4NcKwNDQnNDAuMiJF!5e0!3m2!1sen!2sin!4v1741164413535!5m2!1sen!2sin"
          width="100%"
          height="460"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}

export default MapEmbed;