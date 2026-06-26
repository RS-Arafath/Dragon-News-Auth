import React from 'react';
export const metadata = {
  title: 'The Dragon News - About Us'
 
};
const AboutUsPage = () => {
 return (
   <main className="bg-slate-50 min-h-screen">
     {/* Hero Section */}
     <section className="max-w-6xl mx-auto px-6 py-16">
       <div className="text-center">
         <span className="inline-block bg-red-100 text-red-600 px-4 py-1 rounded-full text-sm font-medium">
           About Dragon News
         </span>

         <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mt-6">
           News That Keeps You Ahead
         </h1>

         <p className="max-w-3xl mx-auto mt-6 text-lg text-slate-600 leading-relaxed">
           Dragon News is a modern digital news platform dedicated to delivering
           timely, accurate, and engaging stories from around the world. From
           breaking headlines to in-depth analysis, we strive to keep our
           readers informed and empowered.
         </p>
       </div>
     </section>

     {/* Mission */}
     <section className="max-w-6xl mx-auto px-6 pb-12">
       <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border">
         <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Mission</h2>

         <p className="text-slate-600 leading-8">
           In an era of information overload, our mission is simple: deliver
           trustworthy news with clarity and context. We believe journalism
           should not only report events, but also help readers understand their
           significance.
         </p>
       </div>
     </section>

     {/* Stats */}
     <section className="max-w-6xl mx-auto px-6 py-8">
       <div className="grid md:grid-cols-3 gap-6">
         <div className="bg-white p-8 rounded-2xl border text-center">
           <h3 className="text-4xl font-bold text-red-600">24/7</h3>
           <p className="mt-2 text-slate-600">News Coverage</p>
         </div>

         <div className="bg-white p-8 rounded-2xl border text-center">
           <h3 className="text-4xl font-bold text-red-600">Global</h3>
           <p className="mt-2 text-slate-600">Perspective</p>
         </div>

         <div className="bg-white p-8 rounded-2xl border text-center">
           <h3 className="text-4xl font-bold text-red-600">Reliable</h3>
           <p className="mt-2 text-slate-600">Information</p>
         </div>
       </div>
     </section>

     {/* Interesting Section */}
     <section className="max-w-6xl mx-auto px-6 py-12">
       <div className="bg-gradient-to-r from-red-600 to-red-500 text-white rounded-3xl p-10">
         <h2 className="text-3xl font-bold">Did You Know?</h2>

         <p className="mt-4 text-lg leading-8">
           The first printed newspaper appeared over 400 years ago, yet the core
           purpose of journalism remains unchanged: helping people understand
           the world around them. At Dragon News, we continue that tradition
           with the speed and accessibility of the digital age.
         </p>
       </div>
     </section>

     {/* Footer Quote */}
     <section className="max-w-4xl mx-auto px-6 py-16 text-center">
       <blockquote className="text-2xl italic text-slate-700">
         "Knowledge grows when information becomes understanding."
       </blockquote>

       <p className="mt-4 text-slate-500">— Dragon News</p>
     </section>
   </main>
 );
};

export default AboutUsPage;