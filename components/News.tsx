export default function NewsAndEvents() {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background" id="news-and-events">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Latest News & Events
          </h2>
          <p className="text-lg text-muted-foreground">
            Stay updated with the latest news and events in the agricultural sector.
          </p>
        </div>

        {/* News List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example News Item */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2">New Tractor Models Launched</h3>
            <p className="text-muted-foreground mb-4">Discover the latest advancements in our new tractor models designed for efficiency and performance.</p>
            <a href="#" className="text-primary hover:underline">Read More</a>
          </div>
          
          {/* Additional news items can be added here */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-2">Upcoming Agricultural Fair</h3>
                <p className="text-muted-foreground mb-4">Join us at the annual agricultural fair to explore the latest innovations and network with industry experts.</p>
                <a href="#" className="text-primary hover:underline">Learn More</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-2">Upcoming Agricultural Fair</h3>
                <p className="text-muted-foreground mb-4">Join us at the annual agricultural fair to explore the latest innovations and network with industry experts.</p>
                <a href="#" className="text-primary hover:underline">Learn More</a>
            </div>
        </div>
    </div>
    </section>
  );
}