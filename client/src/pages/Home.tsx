import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, CheckCircle2, Zap, Brain, Database, BarChart3, Code2, Users, Calendar } from "lucide-react";
import { useState } from "react";

/**
 * Corextend Technologies Website
 * Design: Premium Tech Minimalism with Navy + Gold Accents
 * Typography: Sora (display) + Inter (body)
 * Key Elements: Asymmetric layouts, generous whitespace, smooth animations
 */

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    challenge: "",
    timeline: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", company: "", email: "", challenge: "", timeline: "" });
      setFormSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between h-20">
          <a href="#" className="flex items-center">
            <img src="/corextend-logo.jpg" alt="CoreXtend" className="h-16 w-auto" />
          </a>
          <div className="hidden md:flex gap-8">
            <a href="#services" className="text-sm hover:text-accent transition-colors">Services</a>
            <a href="#approach" className="text-sm hover:text-accent transition-colors">Approach</a>
            <a href="#why" className="text-sm hover:text-accent transition-colors">Why Us</a>
            <a href="#faq" className="text-sm hover:text-accent transition-colors">FAQ</a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Full Width with Large Image */}
      <section className="relative overflow-hidden">
        <div className="relative min-h-screen flex items-center">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="/CXTHeroImage.png"
              alt="AI-Native Problem Solving"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40"></div>
          </div>

          {/* Content */}
          <div className="container relative z-10">
            <div className="max-w-2xl">
              <div className="fade-in-up space-y-6">
                <div className="space-y-4">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
                      UNLEASH YOUR CORE WITH AI
                    </h1>
                    <p className="mt-6 text-lg sm:text-xl md:text-2xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                      Focus on your mission. We extend your scale.<br className="sm:hidden" />
                      Deploy intelligent, modular systems that bridge the gap between abstract strategy and significant scale.
                    </p>
                </div>

                <div className="mt-10 max-w-2xl mx-auto">
                  <p className="text-xl md:text-2xl font-semibold">
                    <span className="text-red-600">Our Promise:</span> We take on projects that 3-5x their investment in year one. If the business case isn't crystal clear, we'll tell you. No fluff, no false starts—just results that matter.
                  </p>
                </div>

                <div className="flex gap-4 pt-6">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 py-6">
                    Schedule a Discovery Call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 text-base px-8 py-6">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars / Services Preview */}
      <section id="services" className="py-20 md:py-32 bg-secondary/5">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Our Core Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized expertise across the AI consulting spectrum
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1: Applied AI Engineering */}
            <Card className="card-hover border-border hover:border-accent/50 bg-card">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="font-display">Applied AI Engineering</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Practical AI implementation—automating decisions, surfacing insights, and scaling operations that currently require manual effort.
                </p>
                <Button variant="ghost" className="text-accent hover:text-accent hover:bg-accent/10 p-0">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Service 2: Data Engineering */}
            <Card className="card-hover border-border hover:border-accent/50 bg-card">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="font-display">Data Engineering</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Infrastructure that turns raw data into reliable fuel for AI systems—scalable, maintainable, production-grade.
                </p>
                <Button variant="ghost" className="text-accent hover:text-accent hover:bg-accent/10 p-0">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Service 3: AI Consulting */}
            <Card className="card-hover border-border hover:border-accent/50 bg-card">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="font-display">AI Consulting</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Strategic guidance on where AI creates value, which investments to make first, and how to build internal capability.
                </p>
                <Button variant="ghost" className="text-accent hover:text-accent hover:bg-accent/10 p-0">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Applied AI Engineering */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="fade-in-up order-1 md:order-1">
              <img
                src="/AppliedAIEngineering.png"
                alt="Applied AI Engineering"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>

            {/* Right: Content */}
            <div className="fade-in-up space-y-6 order-2 md:order-2">
              <h2 className="font-display text-4xl md:text-5xl font-bold">Applied AI Engineering</h2>
              <p className="text-lg text-muted-foreground">
                Practical AI implementation—automating decisions, surfacing insights, and scaling operations that currently require manual effort.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Decision automation for faster, consistent outcomes</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Insight surfacing from complex data patterns</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Operational scaling without proportional headcount growth</span>
                </li>
              </ul>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Explore Applied AI Engineering
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Data Engineering Services */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="fade-in-up space-y-6 order-2 md:order-1">
              <h2 className="font-display text-4xl md:text-5xl font-bold">Data Engineering Services</h2>
              <p className="text-lg text-muted-foreground">
                Infrastructure that turns raw data into reliable fuel for AI systems—scalable, maintainable, production-grade.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>ETL pipelines that handle complex data transformations</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Scalable data infrastructure for enterprise workloads</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Data quality and governance frameworks</span>
                </li>
              </ul>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Learn About Data Engineering
              </Button>
            </div>

            {/* Right: Image */}
            <div className="fade-in-up order-1 md:order-2">
              <img
                src="/DataEngineeringServices.png"
                alt="Data Engineering Services"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Custom Software & Product Management */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            {/* Left: Content */}
            <div className="fade-in-up space-y-6 order-1 md:order-1">
              <h2 className="font-display text-4xl md:text-5xl font-bold">Custom Software Development</h2>
              <p className="text-lg text-muted-foreground">
                Purpose-built solutions designed around your workflows, not generic platforms that force compromise.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Tailored to your specific business needs</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Built with modern, scalable architecture</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Full ownership and control of your codebase</span>
                </li>
              </ul>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Explore Custom Development
              </Button>
            </div>

            {/* Right: Image */}
            <div className="fade-in-up order-2 md:order-2">
              <img
                src="/CustomSoftwareDevelopment.png"
                alt="Custom Software Development"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>

          {/* Product Management */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="fade-in-up space-y-6 order-2 md:order-1">
              <h2 className="font-display text-4xl md:text-5xl font-bold">Product Management as a Function</h2>
              <p className="text-lg text-muted-foreground">
                Strategic product thinking that bridges business goals and technical execution—from roadmap to release.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Strategic roadmap development</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>User-centric design and execution</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Agile delivery with measurable outcomes</span>
                </li>
              </ul>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Learn About Product Management
              </Button>
            </div>

            {/* Right: Image */}
            <div className="fade-in-up order-1 md:order-2">
              <img
                src="/ProductManagementasaFunction.png"
                alt="Product Management as a Function"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>

          {/* Technology Function as a Service */}
          <div className="grid md:grid-cols-2 gap-12 items-center mt-20">
            {/* Left: Content */}
            <div className="fade-in-up space-y-6 order-2 md:order-1">
              <h2 className="font-display text-4xl md:text-5xl font-bold">Technology Function as a Service Access</h2>
              <p className="text-lg text-muted-foreground">
                Senior technical leadership without the overhead of full-time hires. We embed with your team to build capabilities while delivering projects.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Senior technical leadership embedded with your team</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Capability building while delivering projects</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Day-to-day IT setup (email, website, laptops, etc.)</span>
                </li>
              </ul>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Learn About Tech Function Access
              </Button>
            </div>

            {/* Right: Image */}
            <div className="fade-in-up order-1 md:order-2">
              <img
                src="/Techfunctionasaservice.png"
                alt="Technology Function as a Service"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      
      {/* Our Approach */}
      <section id="approach" className="py-20 md:py-32 bg-primary/5">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Our Approach</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that delivers results in 3-6 months
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { phase: "Discovery", weeks: "Weeks 1-2", icon: Brain, description: "Map your challenge, identify leverage points, validate economics" },
              { phase: "Scope & Design", weeks: "Weeks 3-4", icon: BarChart3, description: "Co-create requirements, architecture, and success metrics" },
              { phase: "Build & Test", weeks: "Weeks 5-20", icon: Code2, description: "Iterative development with weekly reviews and progress visibility" },
              { phase: "Deploy & Transfer", weeks: "Weeks 21-24", icon: Users, description: "Production launch with knowledge transfer to your team" },
            ].map((item, idx) => (
              <Card key={idx} className="border-border bg-card hover:border-accent/50 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="font-display text-lg">{item.phase}</CardTitle>
                  <CardDescription className="text-accent font-medium">{item.weeks}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-accent/10 border border-accent/20 rounded-lg p-8 text-center">
            <p className="text-lg font-medium">
              <span className="text-accent">Timeline:</span> 3-6 months from discovery through deployment
            </p>
          </div>
        </div>
      </section>

      {/* Why CoreXtend */}
      <section id="why" className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Why CoreXtend</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              What sets us apart from traditional consulting
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="font-display">Business-First Thinking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Technology serves business outcomes. We don't build what's interesting—we build what drives results.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="font-display">Transparent Economics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  You'll know what success looks like in dollar terms before we start. If we can't see the 3-5x return path, we'll tell you.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="font-display">Speed Without Shortcuts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  AI-native architecture means faster time to value. Modern tools let us deliver in months what used to take years.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="font-display">Partnership Model</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Solutions built with you, not for you. Your expertise + our execution = outcomes that stick.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 md:py-32 bg-secondary/5">
        <div className="container max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Common questions about our services and process
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="hover:text-accent">
                What types of projects do you take on?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We work with organizations looking to implement AI solutions that deliver measurable business value. This includes AI engineering, data infrastructure, custom software development, and strategic consulting. We're selective about engagements—if we can't see a clear path to 3-5x returns within the first year, we'll be honest about it.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="hover:text-accent">
                How long does a typical project take?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Our standard engagement runs 3-6 months from discovery through deployment. This timeline includes discovery (weeks 1-2), scope & design (weeks 3-4), build & test (weeks 5-20), and deploy & transfer (weeks 21-24). We keep momentum high and results visible throughout.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="hover:text-accent">
                What's your process for ensuring project success?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We start with a rigorous discovery phase to validate the business case and identify leverage points. Throughout the project, we maintain weekly reviews and keep you in the room for every major decision. Our focus is on outcomes, not activity—every decision traces back to measurable business impact.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="hover:text-accent">
                Do you provide ongoing support after deployment?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Our deployment phase includes comprehensive knowledge transfer so your team owns the solution from day one. We can discuss ongoing support arrangements based on your specific needs, but our goal is always to build your internal capability.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="hover:text-accent">
                How do you measure success?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Success is defined in dollar terms before we start. We establish clear KPIs during the scope & design phase and track them throughout the project. Our goal is to deliver 3-5x returns in year one—that's the standard we hold ourselves to.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="hover:text-accent">
                What's the first step if I want to explore a project?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Start with a discovery call. We'll discuss your challenge, explore potential solutions, and assess whether there's a strong business case. If it looks promising, we'll move to an economic assessment and proposal. If we're not the right fit, we'll be honest about it.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Ready to Discuss Your Project?</h2>
            <p className="text-lg opacity-90">
              We're selective about engagements—if there's a strong business case and we're confident we can deliver meaningful returns, let's talk.
            </p>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-6 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-primary-foreground/20 border border-primary-foreground/30 text-primary-foreground placeholder-primary-foreground/50 focus:outline-none focus:border-primary-foreground/60"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-primary-foreground/20 border border-primary-foreground/30 text-primary-foreground placeholder-primary-foreground/50 focus:outline-none focus:border-primary-foreground/60"
                  placeholder="Your company"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-primary-foreground/20 border border-primary-foreground/30 text-primary-foreground placeholder-primary-foreground/50 focus:outline-none focus:border-primary-foreground/60"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Brief Description of Challenge</label>
              <textarea
                name="challenge"
                value={formData.challenge}
                onChange={handleFormChange}
                required
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-primary-foreground/20 border border-primary-foreground/30 text-primary-foreground placeholder-primary-foreground/50 focus:outline-none focus:border-primary-foreground/60 resize-none"
                placeholder="Tell us about your challenge..."
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Estimated Timeline</label>
              <select
                name="timeline"
                value={formData.timeline}
                onChange={handleFormChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-primary-foreground/20 border border-primary-foreground/30 text-primary-foreground focus:outline-none focus:border-primary-foreground/60"
              >
                <option value="" disabled>Select a timeline</option>
                <option value="immediate">Immediate (within 1 month)</option>
                <option value="quarter">This quarter</option>
                <option value="year">This year</option>
                <option value="exploring">Just exploring</option>
              </select>
            </div>

            <div className="flex gap-4 pt-4">
              <Button
                type="submit"
                size="lg"
                className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                Send Inquiry
              </Button>
            </div>

            {formSubmitted && (
              <div className="bg-accent/20 border border-accent text-accent-foreground rounded-lg p-4 text-center">
                Thank you! We'll review your inquiry and get back to you within 48 hours.
              </div>
            )}
          </form>

          <div className="mt-12 text-center text-sm opacity-75">
            <p>We review inquiries within 48 hours. If there's potential fit, we'll schedule a 30-minute discovery call.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="font-display font-bold text-lg mb-4">CoreXtend</div>
              <p className="text-sm opacity-75">AI-native consulting for enterprise outcomes.</p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Services</h4>
              <ul className="space-y-2 text-sm opacity-75">
                <li><a href="#" className="hover:opacity-100 transition-opacity">Applied AI Engineering</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Data Engineering</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">AI Consulting</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Company</h4>
              <ul className="space-y-2 text-sm opacity-75">
                <li><a href="#" className="hover:opacity-100 transition-opacity">About Us</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Our Approach</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Connect</h4>
              <ul className="space-y-2 text-sm opacity-75">
                <li><a href="#" className="hover:opacity-100 transition-opacity">LinkedIn</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Twitter</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Email</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-75">
            <p>&copy; 2026 CoreXtend Technologies. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
