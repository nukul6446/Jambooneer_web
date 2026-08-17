 
// import React, { useRef } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import logo from "./assets/logo.png"
// import productimg from "./assets/product2.png"
// gsap.registerPlugin(ScrollTrigger);

// const App = () => {
//   const main = useRef(null);
//   const heroBottle = useRef(null);
//   const journeyBottle = useRef(null);
//   const journeyCap = useRef(null);

//   useGSAP(
//     () => {
//       const ctx = gsap.context(() => {
//         gsap.defaults({
//           ease: "power3.out",
//         });

//         /* ================= HERO ================= */

//         const hero = gsap.timeline();

//         hero
//           .from(".navbar", {
//             y: -40,
//             opacity: 0,
//             duration: 0.8,
//           })
//           .from(".hero-small", {
//             y: 30,
//             opacity: 0,
//             duration: 0.7,
//           })
//           .from(
//             ".hero-title-line",
//             {
//               yPercent: 120,
//               opacity: 0,
//               stagger: 0.08,
//               duration: 1.1,
//               ease: "power4.out",
//             },
//             "-=0.3"
//           )
//           .from(
//             heroBottle.current,
//             {
//               y: 200,
//               opacity: 0,
//               scale: 0.7,
//               rotate: -15,
//               duration: 1.3,
//               ease: "back.out(1.5)",
//             },
//             "-=0.8"
//           )
//           .from(
//             ".hero-description",
//             {
//               y: 40,
//               opacity: 0,
//               duration: 0.8,
//             },
//             "-=0.5"
//           )
//           .from(
//             ".hero-button",
//             {
//               y: 30,
//               opacity: 0,
//               duration: 0.7,
//             },
//             "-=0.4"
//           );

//         gsap
//           .timeline({
//             scrollTrigger: {
//               trigger: ".hero",
//               start: "top top",
//               end: "bottom top",
//               scrub: 1.2,
//             },
//           })
//           .to(
//             ".hero-content",
//             {
//               y: -220,
//               scale: 0.8,
//               opacity: 0,
//             },
//             0
//           )
//           .to(
//             heroBottle.current,
//             {
//               x: 250,
//               y: 300,
//               rotate: 260,
//               scale: 0.65,
//             },
//             0
//           );

//         /* ================= MARQUEE ================= */

//         gsap.to(".marquee-track", {
//           xPercent: -50,
//           duration: 25,
//           repeat: -1,
//           ease: "none",
//         });

//         /* ================= TITLES ================= */

//         gsap.utils.toArray(".reveal-title").forEach((title) => {
//           gsap.from(title.querySelectorAll(".word"), {
//             yPercent: 120,
//             opacity: 0,
//             stagger: 0.06,
//             duration: 1,
//             ease: "power4.out",
//             scrollTrigger: {
//               trigger: title,
//               start: "top 80%",
//             },
//           });
//         });

//         /* ================= CONTENT REVEALS ================= */

//         gsap.utils.toArray(".fade-up").forEach((item) => {
//           gsap.from(item, {
//             y: 80,
//             opacity: 0,
//             duration: 1,
//             scrollTrigger: {
//               trigger: item,
//               start: "top 82%",
//             },
//           });
//         });

//         gsap.utils.toArray(".fade-left").forEach((item) => {
//           gsap.from(item, {
//             x: -100,
//             opacity: 0,
//             duration: 1,
//             scrollTrigger: {
//               trigger: item,
//               start: "top 78%",
//             },
//           });
//         });

//         gsap.utils.toArray(".fade-right").forEach((item) => {
//           gsap.from(item, {
//             x: 100,
//             opacity: 0,
//             duration: 1,
//             scrollTrigger: {
//               trigger: item,
//               start: "top 78%",
//             },
//           });
//         });

//         /* ================= STATS ================= */

//         gsap.from(".stat", {
//           y: 80,
//           opacity: 0,
//           stagger: 0.15,
//           duration: 0.9,
//           scrollTrigger: {
//             trigger: ".stats",
//             start: "top 75%",
//           },
//         });

//         document.querySelectorAll(".counter").forEach((counter) => {
//           const target = Number(counter.dataset.value);

//           gsap.fromTo(
//             counter,
//             { innerText: 0 },
//             {
//               innerText: target,
//               duration: 2,
//               snap: { innerText: 1 },
//               scrollTrigger: {
//                 trigger: counter,
//                 start: "top 85%",
//               },
//             }
//           );
//         });

//         /* ================= WHY ================= */

//         gsap.to(".why-image", {
//           y: -80,
//           scale: 1.12,
//           scrollTrigger: {
//             trigger: ".why-section",
//             start: "top bottom",
//             end: "bottom top",
//             scrub: 1.5,
//           },
//         });

//         /* ================= PRODUCTS ================= */

//         gsap.from(".product-card", {
//           y: 120,
//           opacity: 0,
//           rotateX: 12,
//           stagger: 0.18,
//           duration: 1,
//           scrollTrigger: {
//             trigger: ".products",
//             start: "top 70%",
//           },
//         });

//         document.querySelectorAll(".product-card").forEach((card) => {
//           const image = card.querySelector(".product-bottle");

//           card.addEventListener("mouseenter", () => {
//             gsap.to(card, {
//               y: -15,
//               duration: 0.35,
//             });

//             gsap.to(image, {
//               scale: 1.1,
//               rotate: 5,
//               duration: 0.45,
//             });
//           });

//           card.addEventListener("mouseleave", () => {
//             gsap.to(card, {
//               y: 0,
//               duration: 0.35,
//             });

//             gsap.to(image, {
//               scale: 1,
//               rotate: 0,
//               duration: 0.45,
//             });
//           });
//         });

//         /* ================= QUALITY ================= */

//         gsap.from(".quality-item", {
//           y: 80,
//           opacity: 0,
//           stagger: 0.15,
//           duration: 0.9,
//           scrollTrigger: {
//             trigger: ".quality",
//             start: "top 70%",
//           },
//         });

//         gsap.to(".quality-orbit", {
//           rotate: 360,
//           scrollTrigger: {
//             trigger: ".quality",
//             start: "top bottom",
//             end: "bottom top",
//             scrub: 2,
//           },
//         });

//         /* ================= BOTTLE JOURNEY ================= */

//         const journey = gsap.timeline({
//           scrollTrigger: {
//             trigger: ".bottle-journey",
//             start: "top top",
//             end: "+=3800",
//             scrub: 1.2,
//             pin: true,
//             anticipatePin: 1,
//           },
//         });

//         journey
//           .to(".journey-intro", {
//             y: -160,
//             opacity: 0,
//             duration: 0.7,
//           })
//           .to(
//             journeyBottle.current,
//             {
//               x: 340,
//               rotate: 180,
//               scale: 1.05,
//               duration: 1,
//             },
//             "<"
//           )
//           .fromTo(
//             ".journey-left",
//             {
//               x: -250,
//               opacity: 0,
//             },
//             {
//               x: 0,
//               opacity: 1,
//               duration: 0.8,
//             }
//           )
//           .to(journeyBottle.current, {
//             x: -340,
//             y: 60,
//             rotate: 360,
//             scale: 0.95,
//             duration: 1,
//           })
//           .to(".journey-left", {
//             x: -200,
//             opacity: 0,
//             duration: 0.6,
//           })
//           .fromTo(
//             ".journey-right",
//             {
//               x: 250,
//               opacity: 0,
//             },
//             {
//               x: 0,
//               opacity: 1,
//               duration: 0.8,
//             }
//           )
//           .to(journeyBottle.current, {
//             x: 0,
//             y: -100,
//             rotate: 540,
//             scale: 1.12,
//             duration: 1,
//           })
//           .to(
//             journeyCap.current,
//             {
//               y: -55,
//               rotate: 18,
//               duration: 0.5,
//             },
//             "<"
//           )
//           .to(".water-fill", {
//             height: "100%",
//             duration: 1.2,
//             ease: "power2.inOut",
//           })
//           .to(journeyBottle.current, {
//             y: -180,
//             rotate: 720,
//             scale: 0.82,
//             duration: 1,
//           });

//         /* ================= PROCESS ================= */

//         gsap.from(".process-card", {
//           y: 100,
//           opacity: 0,
//           stagger: 0.15,
//           duration: 1,
//           scrollTrigger: {
//             trigger: ".process",
//             start: "top 70%",
//           },
//         });

//         gsap.from(".process-line", {
//           scaleX: 0,
//           transformOrigin: "left center",
//           scrollTrigger: {
//             trigger: ".process",
//             start: "top 70%",
//             end: "bottom 60%",
//             scrub: 1,
//           },
//         });

//         /* ================= SUSTAINABILITY ================= */

//         gsap.to(".sustain-image", {
//           scale: 1.15,
//           y: -80,
//           scrollTrigger: {
//             trigger: ".sustainability",
//             start: "top bottom",
//             end: "bottom top",
//             scrub: 1.5,
//           },
//         });

//         /* ================= TESTIMONIAL ================= */

//         gsap.from(".quote-card", {
//           y: 120,
//           opacity: 0,
//           duration: 1.2,
//           scrollTrigger: {
//             trigger: ".testimonial",
//             start: "top 70%",
//           },
//         });

//         /* ================= FAQ ================= */

//         gsap.from(".faq-item", {
//           y: 70,
//           opacity: 0,
//           stagger: 0.12,
//           duration: 0.8,
//           scrollTrigger: {
//             trigger: ".faq",
//             start: "top 75%",
//           },
//         });

//         /* ================= CONTACT ================= */

//         gsap.from(".contact-info", {
//           x: -100,
//           opacity: 0,
//           duration: 1,
//           scrollTrigger: {
//             trigger: ".contact",
//             start: "top 70%",
//           },
//         });

//         gsap.from(".contact-form", {
//           x: 100,
//           opacity: 0,
//           duration: 1,
//           scrollTrigger: {
//             trigger: ".contact",
//             start: "top 70%",
//           },
//         });
//       }, main);

//       return () => ctx.revert();
//     },
//     { scope: main }
//   );

//   return (
    
//    <main
//   ref={main}
//   className="overflow-hidden bg-[#071B24] text-[#F4F7F8]"
// >

//       {/* ======================================================
//           NAVBAR
//       ====================================================== */}

//      <nav className="fixed top-4 left-0 w-full z-50 px-4 md:px-6">

//   <div
//     className="
//       max-w-7xl
//       mx-auto
//       px-4
//       md:px-7
//       py-2.5
//       md:py-3
//       rounded-full
//       border
//       border-white/10
//       bg-[#031923]/85
//       backdrop-blur-xl
//       shadow-[0_10px_40px_rgba(0,0,0,0.18)]
//       flex
//       items-center
//       justify-between
//     "
//   >

//     {/* ================= LOGO ================= */}

//     <a
//   href="#home"
//   className="flex items-center shrink-0"
// >
//   <div
//     className="
//       flex
//       items-center
//       justify-center
//       h-10
//       md:h-11
//       px-4
//       md:px-5
//       rounded-full
//       bg-white
//     "
//   >
//     <img
//       src={logo}
//       alt="Kaiyo"
//       className="
//         h-8
//         md:h-9
//         lg:h-10
//         w-auto
//         object-contain
//       "
//     />
//   </div>
// </a>

//     {/* ================= MENU ================= */}

//     <div className="hidden lg:flex items-center gap-8">

//       {[
//         "About",
//         "Products",
//         "Quality",
//         "Process",
//         "Contact",
//       ].map((item) => (
//         <a
//           key={item}
//           href={`#${item.toLowerCase()}`}
//           className="
//             relative
//             text-[10px]
//             uppercase
//             tracking-[0.2em]
//             text-white/65
//             hover:text-cyan-300
//             transition-colors
//             duration-300
//             after:absolute
//             after:left-0
//             after:-bottom-1
//             after:w-0
//             after:h-px
//             after:bg-cyan-300
//             after:transition-all
//             after:duration-300
//             hover:after:w-full
//           "
//         >
//           {item}
//         </a>
//       ))}

//     </div>


//     {/* ================= CTA ================= */}

//     <button
//       className="
//         px-5
//         md:px-7
//         py-2.5
//         rounded-full
//         bg-cyan-300
//         text-[#031923]
//         text-[10px]
//         md:text-xs
//         font-black
//         uppercase
//         tracking-[0.15em]
//         hover:bg-cyan-200
//         hover:scale-105
//         shadow-[0_0_25px_rgba(103,232,249,0.12)]
//         transition-all
//         duration-300
//       "
//     >
//       Order Now
//     </button>

//   </div>

// </nav>

//       {/* ======================================================
//           HERO
//       ====================================================== */}

      
//     <section
//   id="home"
//   className="
//     hero
//     relative
//     h-screen
//     min-h-[720px]
//     overflow-hidden
//     bg-[#031923]
//   "
// >
//   {/* ================= BACKGROUND ================= */}

//   <div className="absolute inset-0 bg-gradient-to-b from-[#073345] via-[#031923] to-[#031923]" />

//   {/* Ambient glows */}
//   <div
//     className="
//       absolute
//       left-[-10%]
//       top-[5%]
//       w-[450px]
//       h-[450px]
//       rounded-full
//       bg-[#0F3040]
//       blur-[130px]
//     "
//   />

//   <div
//     className="
//       absolute
//       right-[-10%]
//       bottom-[-10%]
//       w-[600px]
//       h-[600px]
//       rounded-full
//       bg-blue-500/10
//       blur-[150px]
//     "
//   />

//   <div
//     className="
//       absolute
//       left-[55%]
//       top-[40%]
//       w-[350px]
//       h-[350px]
//       rounded-full
//       bg-cyan-300/5
//       blur-[110px]
//     "
//   />


//   {/* ================= CONTENT ================= */}

//   <div
//     className="
//       hero-content
//       absolute
//       left-0
//       top-1/2
//       -translate-y-1/2
//       z-30
//       w-full
//       px-6
//       sm:px-10
//       md:px-[8vw]
//       lg:px-[9vw]
//     "
//   >

//     <div
//       className="
//         w-full
//         max-w-[900px]
//         lg:max-w-[850px]
//       "
//     >

//       {/* Small heading */}

//       <p
//         className="
//           hero-small
//           text-cyan-300
//           text-[10px]
//           md:text-xs
//           uppercase
//           tracking-[0.45em]
//           md:tracking-[0.5em]
//           mb-5
//           md:mb-6
//         "
//       >
//         Premium Natural Hydration
//       </p>


//       {/* ================= MAIN TITLE ================= */}

//       <h1
//         className="
//           text-[15vw]
//           sm:text-[12vw]
//           md:text-[9vw]
//           lg:text-[7.5vw]
//           font-black
//           tracking-[-0.075em]
//           leading-[0.82]
//         "
//       >

//         <span className="hero-title-line block overflow-hidden">
//           <span
//             className="
//               hero-title-word
//               inline-block
//               bg-gradient-to-r
//               from-white
//               via-cyan-200
//               to-cyan-400
//               bg-clip-text
//               text-transparent
//             "
//           >
//             Pure Water,
//           </span>
//         </span>


//         <span className="hero-title-line block overflow-hidden">
//           <span
//             className="
//               hero-title-word
//               inline-block
//               bg-gradient-to-r
//               from-cyan-300
//               via-blue-300
//               to-white
//               bg-clip-text
//               text-transparent
//             "
//           >
//             Delivered Fresh.
//           </span>
//         </span>

//       </h1>


//       {/* ================= DESCRIPTION ================= */}

//       <p
//         className="
//           hero-description
//           w-full
//           max-w-[520px]
//           mt-7
//           md:mt-8
//           text-sm
//           md:text-base
//           text-white/50
//           leading-[1.7]
//         "
//       >
//         From the sacred heart of Varanasi, Kaiyo brings you
//         rigorously purified, mineral-balanced water — straight
//         to your home, office, or event.
//       </p>


//       {/* ================= FEATURES ================= */}

//       <p
//         className="
//           mt-4
//           text-[8px]
//           sm:text-[9px]
//           md:text-[10px]
//           uppercase
//           tracking-[0.2em]
//           md:tracking-[0.25em]
//           text-cyan-100/35
//         "
//       >
//         Naturally sourced · Carefully purified · Thoughtfully bottled
//       </p>


     

//     </div>

//   </div>


//   {/* ================= BOTTLE ================= */}

//   <div
//     ref={heroBottle}
//     className="
//       hero-bottle
//       absolute
//       z-20
//       pointer-events-none

//       right-[5%]
//       top-1/2
//       -translate-y-1/2

//       md:right-[7%]
//       lg:right-[9%]
//     "
//   >

//     <img
//       src={productimg}
//       alt="Kaiyo premium water bottle"
//       className="
//         block
//         w-[120px]
//         sm:w-[150px]
//         md:w-[200px]
//         lg:w-[240px]
//         xl:w-[270px]
//         drop-shadow-[0_40px_75px_rgba(34,211,238,0.32)]
//       "
//     />

//   </div>


//   {/* ================= SCROLL INDICATOR ================= */}

//   <div
//     className="
//       hero-scroll
//       absolute
//       bottom-7
//       left-1/2
//       -translate-x-1/2
//       z-40
//       flex
//       flex-col
//       items-center
//       gap-3
//     "
//   >

//     <span
//       className="
//         text-[8px]
//         md:text-[9px]
//         uppercase
//         tracking-[0.45em]
//         text-white/30
//       "
//     >
//       Scroll to discover
//     </span>

//     <span
//       className="
//         w-px
//         h-10
//         md:h-12
//         bg-gradient-to-b
//         from-cyan-300
//         to-transparent
//       "
//     />

//   </div>

// </section>

//       {/* ======================================================
//           MARQUEE
//       ====================================================== */}

//       <section className="py-7 bg-cyan-300 text-[#031923] overflow-hidden">

//         <div className="marquee-track flex w-max">

//           {[1, 2].map((copy) => (
//             <div key={copy} className="flex items-center whitespace-nowrap">

//               {[
//                 "PURE AT THE SOURCE",
//                 "CAREFULLY PURIFIED",
//                 "BALANCED MINERALS",
//                 "QUALITY VERIFIED",
//                 "RESPONSIBLY BOTTLED",
//               ].map((item) => (
//                 <React.Fragment key={item}>

//                   <span className="mx-8 font-black text-xs md:text-sm uppercase tracking-[0.2em]">
//                     {item}
//                   </span>

//                   <span>✦</span>

//                 </React.Fragment>
//               ))}

//             </div>
//           ))}

//         </div>

//       </section>

//       {/* ======================================================
//           INTRODUCTION
//       ====================================================== */}

//       <section className="intro-section min-h-[100vh] flex items-center px-6 py-40">

//         <div className="max-w-7xl mx-auto w-full">

//           <div className="grid lg:grid-cols-[1.35fr_1fr] gap-20 items-end">

//             <div>

//               <p className="text-cyan-300 text-xs uppercase tracking-[0.5em] mb-10">
//                 The AQUA philosophy
//               </p>

//               <h2 className="reveal-title text-[12vw] md:text-[8.5vw] font-black leading-[0.75] tracking-[-0.08em]">

//                 <span className="word inline-block">
//                   WATER
//                 </span>

//                 <br />

//                 <span className="word inline-block">
//                   WORTH
//                 </span>

//                 <br />

//                 <span className="word inline-block text-transparent [WebkitTextStroke:1px_white] md:[WebkitTextStroke:2px_white]">
//                   NOTICING.
//                 </span>

//               </h2>

//             </div>

//             <div className="fade-up">

//               <div className="w-16 h-px bg-cyan-300 mb-8" />

//               <p className="text-xl md:text-2xl leading-relaxed text-white/70">

//                 Water is something we experience every
//                 single day, yet the details behind a truly
//                 good bottle are easy to overlook.

//               </p>

//               <p className="mt-7 text-sm md:text-base leading-relaxed text-white/40">

//                 We started AQUA with a different approach.
//                 Instead of treating water as an ordinary
//                 commodity, we wanted to pay attention to
//                 everything that makes the experience better:
//                 the source, the balance, the purification,
//                 the bottle and the way it arrives in your hands.

//               </p>

//               <p className="mt-7 text-sm md:text-base leading-relaxed text-white/40">

//                 The result is a water brand built around
//                 simplicity. No unnecessary noise. No
//                 complicated promise. Just thoughtfully
//                 made hydration that fits naturally into
//                 modern life.

//               </p>

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* ======================================================
//           STATS
//       ====================================================== */}

//       <section className="stats px-6 pb-40">

//         <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-[2rem] overflow-hidden">

//           {[
//             ["18", "Years of experience"],
//             ["07", "Purification stages"],
//             ["99", "Quality compliance"],
//             ["24", "Hour support"],
//           ].map(([number, label]) => (

//             <div
//               key={label}
//               className="stat min-h-[220px] bg-[#031923] p-8 md:p-12 flex flex-col justify-end"
//             >

//               <div className="flex items-end">

//                 <span
//                   className="counter text-6xl md:text-8xl font-black tracking-[-0.07em]"
//                   data-value={number}
//                 >
//                   0
//                 </span>

//                 <span className="text-cyan-300 text-3xl mb-3">
//                   +
//                 </span>

//               </div>

//               <p className="mt-4 text-xs uppercase tracking-[0.2em] text-white/30">
//                 {label}
//               </p>

//             </div>

//           ))}

//         </div>

//       </section>

//       {/* ======================================================
//           WHY AQUA
//       ====================================================== */}

//       <section
//         id="about"
//         className="why-section py-40 md:py-56 px-6"
//       >

//         <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-28 items-center">

//           <div className="h-[600px] relative overflow-hidden rounded-[2rem]">

//             <div className="why-image absolute inset-[-10%] bg-gradient-to-br from-cyan-300 via-blue-600 to-[#031923]" />

//             <div className="absolute inset-0 bg-black/20" />

//             <div className="absolute inset-0 flex items-center justify-center">

//               <div className="w-[280px] h-[280px] rounded-full border border-white/30 flex items-center justify-center">

//                 <span className="text-xs uppercase tracking-[0.4em]">
//                   SOURCE / 01
//                 </span>

//               </div>

//             </div>

//             <div className="absolute left-8 bottom-8">

//               <p className="text-xs uppercase tracking-[0.3em] text-white/40">
//                 The beginning of every bottle
//               </p>

//               <p className="text-3xl font-black mt-2">
//                 STARTS HERE.
//               </p>

//             </div>

//           </div>

//           <div className="fade-right">

//             <p className="text-cyan-300 text-xs uppercase tracking-[0.5em] mb-8">
//               Why AQUA
//             </p>

//             <h2 className="text-6xl md:text-8xl font-black leading-[0.78] tracking-[-0.07em]">
//               SIMPLE
//               <br />
//               THINGS.
//               <br />
//               DONE
//               <br />
//               BETTER.
//             </h2>

//             <p className="mt-12 text-xl leading-relaxed text-white/65">

//               Great water starts long before the bottle.
//               We build every stage around protecting its
//               quality and making the final experience feel
//               effortless.

//             </p>

//             <p className="mt-7 text-sm md:text-base leading-relaxed text-white/40">

//               That means selecting sources with care,
//               maintaining strict production controls,
//               checking quality throughout the process and
//               designing packaging that protects the water
//               until it reaches you.

//             </p>

//             <div className="mt-10 space-y-5">

//               {[
//                 "Carefully selected natural sources",
//                 "Multi-stage controlled purification",
//                 "Independent quality testing",
//                 "Secure filling and packaging",
//                 "Reliable delivery and support",
//               ].map((item, index) => (

//                 <div
//                   key={item}
//                   className="flex items-center gap-5 border-b border-white/10 pb-5"
//                 >

//                   <span className="text-cyan-300 font-black">
//                     0{index + 1}
//                   </span>

//                   <span className="text-white/60">
//                     {item}
//                   </span>

//                 </div>

//               ))}

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* ======================================================
//           PRODUCTS
//       ====================================================== */}

//       <section
//         id="products"
//         className="products bg-[#f4fbfc] text-[#031923] px-6 py-40 md:py-56"
//       >

//         <div className="max-w-7xl mx-auto">

//           <div className="flex flex-col md:flex-row justify-between md:items-end gap-10 mb-24">

//             <div>

//               <p className="text-cyan-600 text-xs uppercase tracking-[0.5em] mb-8">
//                 The collection
//               </p>

//               <h2 className="reveal-title text-7xl md:text-[9vw] font-black leading-[0.72] tracking-[-0.08em]">

//                 <span className="word inline-block">
//                   FIND
//                 </span>

//                 <br />

//                 <span className="word inline-block">
//                   YOUR
//                 </span>

//                 <br />

//                 <span className="word inline-block">
//                   FLOW.
//                 </span>

//               </h2>

//             </div>

//             <div className="max-w-md fade-up">

//               <p className="text-[#031923]/60 leading-relaxed">

//                 Different days call for different formats.
//                 Our collection is designed around the
//                 moments when hydration becomes part of
//                 the rhythm of your day.

//               </p>

//               <p className="mt-5 text-[#031923]/45 text-sm leading-relaxed">

//                 Choose a compact bottle for your commute,
//                 a larger format for longer days or a family
//                 size for the moments you share.

//               </p>

//             </div>

//           </div>

//           <div className="grid md:grid-cols-3 gap-6">

//             {[
//               {
//                 name: "DAILY",
//                 size: "500 ML",
//                 description:
//                   "A compact everyday bottle designed for work, commutes, workouts and quick refreshes.",
//               },
//               {
//                 name: "RESERVE",
//                 size: "750 ML",
//                 description:
//                   "More hydration for longer days, travel, outdoor plans and everything in between.",
//               },
//               {
//                 name: "FAMILY",
//                 size: "2 LITRE",
//                 description:
//                   "A generous format created for shared moments, home use and keeping everyone refreshed.",
//               },
//             ].map((product, index) => (

//               <article
//                 key={product.name}
//                 className="product-card min-h-[680px] rounded-[2.5rem] bg-gradient-to-br from-[#dff8fb] to-[#cfe9ff] p-8 md:p-10 flex flex-col justify-between overflow-hidden"
//               >

//                 <div className="flex justify-between">

//                   <span className="font-black tracking-[0.2em]">
//                     AQUA
//                   </span>

//                   <span className="text-xs opacity-40">
//                     0{index + 1}
//                   </span>

//                 </div>

//                 <div className="flex justify-center py-8">

//                   <img
//                     src="https://pngimg.com/uploads/water_bottle/water_bottle_PNG98936.png"
//                     alt={product.name}
//                     className="product-bottle h-[350px] object-contain drop-shadow-[0_30px_30px_rgba(0,70,120,0.25)]"
//                   />

//                 </div>

//                 <div>

//                   <p className="text-xs tracking-[0.2em] opacity-40">
//                     {product.size}
//                   </p>

//                   <h3 className="text-5xl font-black mt-3">
//                     {product.name}
//                   </h3>

//                   <p className="mt-5 opacity-50 leading-relaxed">
//                     {product.description}
//                   </p>

//                   <p className="mt-4 text-sm opacity-40 leading-relaxed">

//                     Carefully shaped around everyday
//                     convenience, with a clean visual language
//                     and a format that is easy to carry, use
//                     and enjoy.

//                   </p>

//                   <button className="mt-8 text-xs font-black uppercase tracking-[0.2em] border-b border-[#031923] pb-2">
//                     Explore product →
//                   </button>

//                 </div>

//               </article>

//             ))}

//           </div>

//         </div>

//       </section>

//       {/* ======================================================
//           QUALITY
//       ====================================================== */}

//       <section
//         id="quality"
//         className="quality relative overflow-hidden py-40 md:py-56 px-6 min-h-[100vh]"
//       >

//         <div className="quality-orbit absolute right-[-250px] top-[10%] w-[700px] h-[700px] rounded-full border border-cyan-300/10" />

//         <div className="quality-orbit absolute right-[-120px] top-[22%] w-[500px] h-[500px] rounded-full border border-cyan-300/10" />

//         <div className="max-w-7xl mx-auto relative z-10">

//           <p className="text-cyan-300 text-xs uppercase tracking-[0.5em] mb-8">
//             Quality without compromise
//           </p>

//           <h2 className="reveal-title text-7xl md:text-[10vw] font-black leading-[0.7] tracking-[-0.08em]">

//             <span className="word inline-block">
//               NOTHING
//             </span>

//             <br />

//             <span className="word inline-block text-transparent [WebkitTextStroke:1px_white] md:[WebkitTextStroke:2px_white]">
//               EXTRA.
//             </span>

//           </h2>

//           <div className="max-w-3xl mt-16 fade-up">

//             <p className="text-xl md:text-2xl text-white/65 leading-relaxed">

//               Purity is not a single step. It is a process
//               of decisions, controls and checks that continue
//               from the source all the way to the finished bottle.

//             </p>

//             <p className="mt-7 text-sm md:text-base text-white/40 leading-relaxed">

//               Our production philosophy combines careful
//               sourcing with controlled purification and
//               continuous testing. Each stage exists for a
//               reason, and each stage is monitored with the
//               same attention to consistency.

//             </p>

//           </div>

//           <div className="grid md:grid-cols-3 gap-12 mt-24 max-w-5xl">

//             {[
//               [
//                 "01",
//                 "SOURCE",
//                 "We select sources based on natural quality, consistency and the characteristics that make water refreshing.",
//               ],
//               [
//                 "02",
//                 "PURIFY",
//                 "Controlled filtration removes unwanted elements while helping maintain a clean and balanced experience.",
//               ],
//               [
//                 "03",
//                 "VERIFY",
//                 "Quality checks are performed throughout the journey so every bottle reaches the same high standard.",
//               ],
//             ].map(([number, title, text]) => (

//               <div key={number} className="quality-item">

//                 <span className="w-14 h-14 rounded-full bg-cyan-300 text-[#031923] flex items-center justify-center font-black">
//                   {number}
//                 </span>

//                 <h3 className="text-2xl font-black mt-8">
//                   {title}
//                 </h3>

//                 <p className="mt-5 text-white/40 leading-relaxed">
//                   {text}
//                 </p>

//                 <p className="mt-5 text-sm text-white/25 leading-relaxed">
//                   Every detail is considered as part of a
//                   larger system designed around consistency,
//                   cleanliness and trust.
//                 </p>

//               </div>

//             ))}

//           </div>

//         </div>

//       </section>

//       {/* ======================================================
//           BOTTLE JOURNEY
//       ====================================================== */}

//       <section className="bottle-journey h-screen relative overflow-hidden bg-gradient-to-br from-[#063444] via-[#07506a] to-[#031923]">

//         <div className="absolute inset-0">

//           <div className="absolute left-[5%] top-[15%] w-[500px] h-[500px] bg-cyan-300/10 rounded-full blur-[130px]" />

//           <div className="absolute right-[5%] bottom-[10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[130px]" />

//         </div>

//         <div className="journey-intro absolute inset-0 flex items-center justify-center text-center z-20">

//           <div>

//             <p className="text-cyan-300 text-xs uppercase tracking-[0.5em] mb-8">
//               Follow the journey
//             </p>

//             <h2 className="text-[13vw] font-black leading-[0.7] tracking-[-0.08em]">

//               FROM
//               <br />
//               SOURCE
//               <br />

             

//             </h2>

//             <p className="max-w-md mx-auto mt-10 text-sm text-white/35 leading-relaxed">
//               Scroll slowly through the journey. Watch the
//               bottle move, the cap open and the water rise
//               as each stage becomes part of the story.
//             </p>

//           </div>

//         </div>

//         <div className="journey-left absolute left-[7%] top-1/2 -translate-y-1/2 z-30 max-w-sm opacity-0">

//           <p className="text-cyan-300 text-xs uppercase tracking-[0.4em]">
//             01 / Source
//           </p>

//           <h3 className="text-5xl md:text-7xl font-black leading-[0.8] mt-6">
//             IT STARTS
//             <br />
//             NATURALLY.
//           </h3>

//           <p className="mt-8 text-white/45 leading-relaxed">

//             Before the bottle exists, there is the source.
//             We begin by selecting water for its natural
//             characteristics, consistency and suitability
//             for our process.

//           </p>

//           <p className="mt-5 text-sm text-white/30 leading-relaxed">

//             Protecting that beginning is one of the most
//             important responsibilities we have.

//           </p>

//         </div>

//         <div className="journey-right absolute right-[7%] top-1/2 -translate-y-1/2 z-30 max-w-sm text-right opacity-0">

//           <p className="text-cyan-300 text-xs uppercase tracking-[0.4em]">
//             02 / Purification
//           </p>

//           <h3 className="text-5xl md:text-7xl font-black leading-[0.8] mt-6">
//             CLEAN.
//             <br />
//             BALANCED.
//           </h3>

//           <p className="mt-8 text-white/45 leading-relaxed">

//             Once the water enters our facility, it passes
//             through controlled stages designed to remove
//             unwanted elements while creating a clean,
//             refreshing and consistent final experience.

//           </p>

//           <p className="mt-5 text-sm text-white/30 leading-relaxed">

//             Every stage is monitored. Every bottle is part
//             of the same commitment to quality.

//           </p>

//         </div>

// <div
//   className="
//     hero-content
//     absolute
//     left-0
//     top-[20%]
//     md:top-[42%]
//     lg:top-[44%]
//     -translate-y-1/2
//     z-30
//     w-full
//     px-6
//     md:px-[8vw]
//   "
// >
//           <div className="relative">

//             <div
//               ref={journeyCap}
//               className="absolute z-50 left-1/2 -translate-x-1/2 -top-8 w-[55px] h-[38px] rounded-t-xl bg-gradient-to-b from-white to-slate-200 shadow-xl"
//             />

//             <img
//               ref={journeyBottle}
//               src="https://pngimg.com/uploads/water_bottle/water_bottle_PNG98936.png"
//               alt="Water journey"
//               className="w-[190px] md:w-[260px] drop-shadow-[0_50px_80px_rgba(34,211,238,0.35)]"
//             />

//           </div>

//         </div>

//         <div className="water-fill absolute bottom-0 left-0 w-full h-0 bg-cyan-300 z-50">

//           <div className="absolute -top-8 left-[-5%] w-[110%] h-16 bg-cyan-300 rounded-[50%]" />

//           <div className="h-full flex flex-col items-center justify-center text-center">

//             <p className="text-[#031923]/50 text-xs uppercase tracking-[0.4em]">
//               The final result
//             </p>

//             <h2 className="text-[#031923] text-[14vw] font-black tracking-[-0.08em]">
//               PURE.
//             </h2>

//             <p className="max-w-md px-6 text-[#031923]/60 leading-relaxed">
//               Carefully made hydration, ready for the moment
//               you need it. Simple, refreshing and designed
//               to become part of your everyday rhythm.
//             </p>

//           </div>

//         </div>

//       </section>

//       {/* ======================================================
//           PROCESS
//       ====================================================== */}

//       <section
//         id="process"
//         className="process bg-[#f4fbfc] text-[#031923] px-6 py-40 md:py-56"
//       >

//         <div className="max-w-7xl mx-auto">

//           <p className="text-cyan-600 text-xs uppercase tracking-[0.5em] mb-8">
//             Behind every bottle
//           </p>

//           <h2 className="reveal-title text-7xl md:text-[9vw] font-black leading-[0.72] tracking-[-0.08em]">

//             <span className="word inline-block">
//               CAREFULLY
//             </span>

//             <br />

//             <span className="word inline-block">
//               MADE.
//             </span>

//           </h2>

//           <div className="max-w-3xl mt-16 fade-up">

//             <p className="text-xl md:text-2xl text-[#031923]/65 leading-relaxed">

//               What looks like a simple bottle of water
//               represents a carefully controlled journey.
//               Every stage is connected, and every decision
//               is made with the final experience in mind.

//             </p>

//             <p className="mt-6 text-sm md:text-base text-[#031923]/45 leading-relaxed">

//               From source selection to final packaging,
//               our process is designed to protect quality,
//               maintain consistency and make sure the water
//               you receive feels exactly as intended.

//             </p>

//           </div>

//           <div className="relative mt-32">

//             <div className="absolute left-0 right-0 top-8 h-px bg-black/10" />

//             <div className="process-line absolute left-0 right-0 top-8 h-px bg-cyan-500" />

//             <div className="grid md:grid-cols-4 gap-12">

//               {[
//                 [
//                   "01",
//                   "SOURCE",
//                   "The beginning matters. We select water from sources chosen for natural quality and consistency.",
//                 ],
//                 [
//                   "02",
//                   "FILTER",
//                   "Controlled filtration helps create a clean, refreshing profile while maintaining balance.",
//                 ],
//                 [
//                   "03",
//                   "TEST",
//                   "Samples are checked throughout the process to ensure every stage performs as expected.",
//                 ],
//                 [
//                   "04",
//                   "BOTTLE",
//                   "The finished water is carefully sealed, packaged and prepared for its journey to you.",
//                 ],
//               ].map(([number, title, text]) => (

//                 <div key={number} className="process-card pt-20">

//                   <div className="w-16 h-16 rounded-full bg-[#031923] text-white flex items-center justify-center font-black">
//                     {number}
//                   </div>

//                   <h3 className="text-2xl font-black mt-8">
//                     {title}
//                   </h3>

//                   <p className="mt-5 text-[#031923]/50 leading-relaxed">
//                     {text}
//                   </p>

//                   <p className="mt-4 text-sm text-[#031923]/35 leading-relaxed">
//                     Carefully monitored as part of our
//                     commitment to delivering a consistent
//                     experience from one bottle to the next.
//                   </p>

//                 </div>

//               ))}

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* ======================================================
//           SUSTAINABILITY
//       ====================================================== */}

//       <section className="sustainability min-h-screen relative overflow-hidden">

//         <div className="absolute inset-0 bg-[#06312e]" />

//         <div className="sustain-image absolute inset-[-10%] bg-gradient-to-br from-emerald-400/50 via-cyan-400/20 to-[#031923]" />

//         <div className="absolute inset-0 bg-black/30" />

//         <div className="relative z-10 min-h-screen flex items-center px-6">

//           <div className="max-w-7xl mx-auto w-full">

//             <p className="text-cyan-300 text-xs uppercase tracking-[0.5em] mb-8">
//               Looking forward
//             </p>

//             <h2 className="text-7xl md:text-[10vw] font-black leading-[0.72] tracking-[-0.08em] max-w-5xl">
//               BETTER
//               <br />
//               FOR
//               <br />
//               TOMORROW.
//             </h2>

//             <div className="grid md:grid-cols-2 gap-12 mt-14 max-w-4xl">

//               <p className="text-lg md:text-xl text-white/60 leading-relaxed">

//                 Good hydration should not create unnecessary
//                 waste. We are continuously looking at better
//                 ways to approach materials, packaging,
//                 logistics and everyday operations.

//               </p>

//               <p className="text-sm md:text-base text-white/35 leading-relaxed">

//                 Our goal is not to pretend that every impact
//                 can disappear overnight. It is to keep improving,
//                 measure what matters and make better decisions
//                 as our technology and understanding evolve.

//               </p>

//             </div>

//             <div className="grid sm:grid-cols-3 gap-5 mt-14">

//               {[
//                 ["01", "Better materials"],
//                 ["02", "Smarter operations"],
//                 ["03", "Long-term thinking"],
//               ].map(([number, title]) => (

//                 <div
//                   key={number}
//                   className="border border-white/10 rounded-2xl p-6 backdrop-blur-md"
//                 >

//                   <span className="text-cyan-300 text-xs">
//                     {number}
//                   </span>

//                   <p className="mt-8 font-black">
//                     {title}
//                   </p>

//                 </div>

//               ))}

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* ======================================================
//           LIFESTYLE
//       ====================================================== */}

//       <section className="px-6 py-40 md:py-56">

//         <div className="max-w-7xl mx-auto">

//           <div className="grid lg:grid-cols-2 gap-20 items-end">

//             <div>

//               <p className="text-cyan-300 text-xs uppercase tracking-[0.5em] mb-8">
//                 Made for real life
//               </p>

//               <h2 className="reveal-title text-7xl md:text-[9vw] font-black leading-[0.72] tracking-[-0.08em]">

//                 <span className="word inline-block">
//                   WHERE
//                 </span>

//                 <br />

//                 <span className="word inline-block">
//                   LIFE
//                 </span>

//                 <br />

//                 <span className="word inline-block text-transparent [WebkitTextStroke:1px_white] md:[WebkitTextStroke:2px_white]">
//                   HAPPENS.
//                 </span>

//               </h2>

//             </div>

//             <div className="fade-up">

//               <p className="text-xl text-white/55 leading-relaxed">

//                 Water does not belong to one particular
//                 moment. It follows us through meetings,
//                 workouts, journeys, conversations, quiet
//                 mornings and long evenings.

//               </p>

//               <p className="mt-6 text-sm text-white/35 leading-relaxed">

//                 That is why our bottles are designed to feel
//                 natural in your hand and natural in your routine.
//                 No matter where your day takes you, hydration
//                 should simply be there when you need it.

//               </p>

//             </div>

//           </div>

//           <div className="grid md:grid-cols-3 gap-5 mt-24">

//             {[
//               {
//                 title: "MORNING",
//                 text: "Start the day with a clean, refreshing ritual before the world gets busy.",
//               },
//               {
//                 title: "MOVEMENT",
//                 text: "Keep hydration close during workouts, commutes, travel and everything between.",
//               },
//               {
//                 title: "EVENING",
//                 text: "Slow down, refresh and reset with a simple bottle within reach.",
//               },
//             ].map((item, index) => (

//               <div
//                 key={item.title}
//                 className="min-h-[440px] rounded-[2rem] p-8 flex flex-col justify-end bg-gradient-to-br from-[#073345] to-[#041d29] border border-white/10 fade-up"
//               >

//                 <span className="text-cyan-300 text-xs">
//                   0{index + 1}
//                 </span>

//                 <h3 className="text-4xl font-black mt-5">
//                   {item.title}
//                 </h3>

//                 <p className="mt-4 text-white/40 leading-relaxed">
//                   {item.text}
//                 </p>

//               </div>

//             ))}

//           </div>

//         </div>

//       </section>

//       {/* ======================================================
//           TESTIMONIALS
//       ====================================================== */}

//       <section className="testimonial px-6 py-40 md:py-56">

//         <div className="max-w-7xl mx-auto">

//           <div className="text-center mb-24">

//             <p className="text-cyan-300 text-xs uppercase tracking-[0.5em]">
//               Customer stories
//             </p>

//             <h2 className="text-6xl md:text-8xl font-black tracking-[-0.07em] mt-8">
//               HEARD FROM
//               <br />
//               PEOPLE LIKE YOU.
//             </h2>

//           </div>

//           <div className="grid md:grid-cols-3 gap-5">

//             {[
//               {
//                 quote:
//                   "The first thing I noticed was how clean the experience felt. The bottle, the taste and the whole brand feel considered without trying too hard.",
//                 name: "MAYA R.",
//                 role: "Creative Director",
//               },
//               {
//                 quote:
//                   "We started ordering for the office and the response was immediate. It is become one of those small details that makes the space feel better.",
//                 name: "ARJUN K.",
//                 role: "Founder",
//               },
//               {
//                 quote:
//                   "I like that the brand focuses on the basics. Good water, good design and a process that actually feels thoughtful.",
//                 name: "PRIYA S.",
//                 role: "Designer",
//               },
//             ].map((item) => (

//               <div
//                 key={item.name}
//                 className="quote-card border border-white/10 rounded-[2rem] p-8 md:p-10 min-h-[380px] flex flex-col justify-between"
//               >

//                 <div>

//                   <div className="text-cyan-300 text-xl">
//                     ★★★★★
//                   </div>

//                   <p className="mt-8 text-lg md:text-xl leading-relaxed text-white/65">
//                     “{item.quote}”
//                   </p>

//                 </div>

//                 <div>

//                   <p className="font-black">
//                     {item.name}
//                   </p>

//                   <p className="text-xs uppercase tracking-[0.2em] text-white/25 mt-2">
//                     {item.role}
//                   </p>

//                 </div>

//               </div>

//             ))}

//           </div>

//         </div>

//       </section>

//       {/* ======================================================
//           FAQ
//       ====================================================== */}

//       <section
//         id="faq"
//         className="faq bg-[#f4fbfc] text-[#031923] px-6 py-40 md:py-56"
//       >

//         <div className="max-w-5xl mx-auto">

//           <p className="text-cyan-600 text-xs uppercase tracking-[0.5em] mb-8">
//             Questions
//           </p>

//           <h2 className="reveal-title text-7xl md:text-[8vw] font-black leading-[0.72] tracking-[-0.08em]">

//             <span className="word inline-block">
//               GOOD
//             </span>

//             <br />

//             <span className="word inline-block">
//               TO
//             </span>

//             <br />

//             <span className="word inline-block">
//               KNOW.
//             </span>

//           </h2>

//           <div className="mt-24">

//             {[
//               [
//                 "Where does your water come from?",
//                 "Our water begins with carefully selected sources chosen for their natural characteristics, consistency and suitability for purification. We focus on protecting the qualities that make the source unique while maintaining a reliable final experience.",
//               ],
//               [
//                 "How is the water purified?",
//                 "The water passes through multiple controlled purification stages. Each stage has a specific purpose and the overall process is monitored to help create clean, balanced and refreshing hydration.",
//               ],
//               [
//                 "How do you check quality?",
//                 "Quality checks take place throughout production rather than only at the final stage. This allows our team to monitor the process and maintain consistent standards from source through filling and packaging.",
//               ],
//               [
//                 "Do you offer bulk orders?",
//                 "Yes. We can provide dedicated solutions for offices, hospitality businesses, events, retailers and recurring requirements. Contact our team with your expected quantity and delivery requirements.",
//               ],
//               [
//                 "Can I order directly?",
//                 "Yes. Contact our team with the product format and quantity you are looking for. We will help with availability, pricing and delivery information.",
//               ],
//               [
//                 "Is AQUA available for businesses?",
//                 "AQUA can be supplied for workplaces, hospitality environments, events and other business requirements. We can work with recurring orders and larger quantities.",
//               ],
//               [
//                 "How can I contact the team?",
//                 "Use the contact form below or reach us using the email and phone details provided in the footer. Our team will respond with the information you need.",
//               ],
//             ].map(([question, answer]) => (

//               <div
//                 key={question}
//                 className="faq-item border-b border-[#031923]/10 py-8"
//               >

//                 <div className="flex justify-between gap-8">

//                   <h3 className="text-xl md:text-2xl font-black">
//                     {question}
//                   </h3>

//                   <span className="text-2xl">
//                     +
//                   </span>

//                 </div>

//                 <p className="max-w-3xl mt-5 text-[#031923]/50 leading-relaxed">
//                   {answer}
//                 </p>

//               </div>

//             ))}

//           </div>

//         </div>

//       </section>

//       {/* ======================================================
//           CONTACT
//       ====================================================== */}

//       <section
//         id="contact"
//         className="contact px-6 py-40 md:py-56"
//       >

//         <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.8fr_1.2fr] gap-20">

//           <div className="contact-info">

//             <p className="text-cyan-300 text-xs uppercase tracking-[0.5em] mb-8">
//               Let's talk
//             </p>

//             <h2 className="text-7xl md:text-[8vw] font-black leading-[0.72] tracking-[-0.08em]">

//               LET'S
//               <br />
//               TALK
//               <br />

//               <span className="text-transparent [WebkitTextStroke:1px_white] md:[WebkitTextStroke:2px_white]">
//                 WATER.
//               </span>

//             </h2>

//             <p className="mt-12 max-w-md text-white/45 leading-relaxed">

//               Whether you're looking for a personal order,
//               a bulk supply, hospitality partnership or simply
//               want to learn more about our water, we'd love
//               to hear from you.

//             </p>

//             <p className="mt-6 max-w-md text-sm text-white/30 leading-relaxed">

//               Tell us what you need, where you are located
//               and how we can help. Our team will review your
//               enquiry and get back to you with the next steps.

//             </p>

//             <div className="mt-12 space-y-7">

//               <div>
//                 <p className="text-xs uppercase tracking-[0.2em] text-white/25">
//                   Email
//                 </p>

//                 <p className="mt-2 text-lg">
//                   hello@aquawater.test
//                 </p>
//               </div>

//               <div>
//                 <p className="text-xs uppercase tracking-[0.2em] text-white/25">
//                   Phone
//                 </p>

//                 <p className="mt-2 text-lg">
//                   +91 90000 00000
//                 </p>
//               </div>

//               <div>
//                 <p className="text-xs uppercase tracking-[0.2em] text-white/25">
//                   Studio
//                 </p>

//                 <p className="mt-2 text-lg">
//                   Bhopal, Madhya Pradesh
//                 </p>
//               </div>

//               <div>
//                 <p className="text-xs uppercase tracking-[0.2em] text-white/25">
//                   Hours
//                 </p>

//                 <p className="mt-2 text-lg">
//                   Monday — Saturday
//                   <br />
//                   09:00 — 18:00
//                 </p>
//               </div>

//             </div>

//           </div>

//           <form
//             className="contact-form bg-[#f4fbfc] text-[#031923] rounded-[2rem] p-7 md:p-12"
//             onSubmit={(e) => e.preventDefault()}
//           >

//             <div className="mb-12">

//               <p className="text-xs uppercase tracking-[0.25em] text-[#031923]/35">
//                 Start a conversation
//               </p>

//               <h3 className="text-4xl md:text-5xl font-black mt-4">
//                 Tell us what
//                 <br />
//                 you need.
//               </h3>

//             </div>

//             <div className="grid md:grid-cols-2 gap-6">

//               <div>

//                 <label className="text-xs uppercase tracking-[0.2em] opacity-50">
//                   Name
//                 </label>

//                 <input
//                   type="text"
//                   placeholder="Your name"
//                   className="mt-3 w-full bg-transparent border-b border-[#031923]/15 py-4 outline-none focus:border-cyan-500"
//                 />

//               </div>

//               <div>

//                 <label className="text-xs uppercase tracking-[0.2em] opacity-50">
//                   Email
//                 </label>

//                 <input
//                   type="email"
//                   placeholder="you@example.com"
//                   className="mt-3 w-full bg-transparent border-b border-[#031923]/15 py-4 outline-none focus:border-cyan-500"
//                 />

//               </div>

//             </div>

//             <div className="mt-10">

//               <label className="text-xs uppercase tracking-[0.2em] opacity-50">
//                 Phone
//               </label>

//               <input
//                 type="tel"
//                 placeholder="+91"
//                 className="mt-3 w-full bg-transparent border-b border-[#031923]/15 py-4 outline-none focus:border-cyan-500"
//               />

//             </div>

//             <div className="mt-10">

//               <label className="text-xs uppercase tracking-[0.2em] opacity-50">
//                 Company
//               </label>

//               <input
//                 type="text"
//                 placeholder="Company name (optional)"
//                 className="mt-3 w-full bg-transparent border-b border-[#031923]/15 py-4 outline-none focus:border-cyan-500"
//               />

//             </div>

//             <div className="mt-10">

//               <label className="text-xs uppercase tracking-[0.2em] opacity-50">
//                 What can we help with?
//               </label>

//               <select className="mt-3 w-full bg-transparent border-b border-[#031923]/15 py-4 outline-none">

//                 <option>General enquiry</option>
//                 <option>Product order</option>
//                 <option>Bulk order</option>
//                 <option>Business partnership</option>
//                 <option>Event requirement</option>
//                 <option>Other</option>

//               </select>

//             </div>

//             <div className="mt-10">

//               <label className="text-xs uppercase tracking-[0.2em] opacity-50">
//                 Message
//               </label>

//               <textarea
//                 rows="6"
//                 placeholder="Tell us a little about what you need..."
//                 className="mt-3 w-full bg-transparent border-b border-[#031923]/15 py-4 outline-none resize-none focus:border-cyan-500"
//               />

//             </div>

//             <button
//               type="submit"
//               className="mt-10 w-full py-5 rounded-full bg-[#031923] text-white text-xs font-black uppercase tracking-[0.25em] hover:bg-cyan-500 hover:text-[#031923] transition"
//             >
//               Send Message →
//             </button>

//             <p className="text-center text-xs text-[#031923]/30 mt-5">
//               We usually respond within one business day.
//             </p>

//           </form>

//         </div>

//       </section>

//       {/* ======================================================
//           CTA
//       ====================================================== */}

//       <section className="min-h-[90vh] relative overflow-hidden bg-gradient-to-br from-cyan-300 via-cyan-400 to-blue-500 text-[#031923] flex items-center justify-center text-center px-6">

//         <div className="absolute w-[700px] h-[700px] rounded-full border border-[#031923]/10" />

//         <div className="relative z-10 max-w-4xl">

//           <p className="text-xs uppercase tracking-[0.5em] mb-10">
//             Stay refreshed
//           </p>

//           <h2 className="text-[15vw] md:text-[11vw] font-black leading-[0.7] tracking-[-0.08em]">

//             DRINK
//             <br />
//             PURE.

//           </h2>

//           <p className="max-w-lg mx-auto mt-12 text-[#031923]/60 leading-relaxed">

//             Join our community for product updates,
//             new releases, hydration stories, thoughtful
//             lifestyle content and occasional good news
//             from AQUA.

//           </p>

//           <div className="max-w-xl mx-auto mt-10 flex flex-col sm:flex-row gap-3">

//             <input
//               type="email"
//               placeholder="Your email address"
//               className="flex-1 px-7 py-5 rounded-full bg-white/40 outline-none placeholder:text-[#031923]/40"
//             />

//             <button className="px-8 py-5 rounded-full bg-[#031923] text-white text-xs uppercase tracking-[0.2em] font-black hover:scale-105 transition">
//               Subscribe
//             </button>

//           </div>

//         </div>

//       </section>

//       {/* ======================================================
//           FOOTER
//       ====================================================== */}

//       <footer className="bg-[#031923] px-6 pt-24 pb-10">

//         <div className="max-w-7xl mx-auto">

//           <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-14">

//             <div className="lg:col-span-2">

//               <div className="flex items-center gap-3">

//                 <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-300 to-blue-500 flex items-center justify-center">

//                   <span className="font-black text-[#031923]">
//                     A
//                   </span>

//                 </div>

//                 <span className="text-2xl font-black tracking-[0.25em]">
//                   AQUA
//                 </span>

//               </div>

//               <p className="mt-7 max-w-sm text-white/35 leading-relaxed">

//                 Pure water, thoughtfully considered.
//                 From carefully selected sources to beautifully
//                 simple everyday hydration, AQUA exists to make
//                 the ordinary feel exceptional.

//               </p>

//               <p className="mt-5 max-w-sm text-sm text-white/20 leading-relaxed">

//                 Built around quality, simplicity and a belief
//                 that the details matter.

//               </p>

//               <div className="mt-8 flex gap-3">

//                 {["IG", "IN", "FB", "YT"].map((social) => (

//                   <a
//                     key={social}
//                     href="#"
//                     className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-xs text-white/50 hover:bg-cyan-300 hover:text-[#031923] transition"
//                   >
//                     {social}
//                   </a>

//                 ))}

//               </div>

//             </div>

//             <div>

//               <p className="text-xs uppercase tracking-[0.3em] text-white/25 mb-7">
//                 Explore
//               </p>

//               <div className="space-y-4 text-sm text-white/50">

//                 <a href="#about" className="block hover:text-cyan-300 transition">
//                   About
//                 </a>

//                 <a href="#products" className="block hover:text-cyan-300 transition">
//                   Products
//                 </a>

//                 <a href="#quality" className="block hover:text-cyan-300 transition">
//                   Quality
//                 </a>

//                 <a href="#process" className="block hover:text-cyan-300 transition">
//                   Process
//                 </a>

//                 <a href="#faq" className="block hover:text-cyan-300 transition">
//                   FAQ
//                 </a>

//               </div>

//             </div>

//             <div>

//               <p className="text-xs uppercase tracking-[0.3em] text-white/25 mb-7">
//                 Company
//               </p>

//               <div className="space-y-4 text-sm text-white/50">

//                 <p>Our Story</p>
//                 <p>Careers</p>
//                 <p>Partners</p>
//                 <p>Sustainability</p>
//                 <p>Contact</p>

//               </div>

//             </div>

//             <div>

//               <p className="text-xs uppercase tracking-[0.3em] text-white/25 mb-7">
//                 Help
//               </p>

//               <div className="space-y-4 text-sm text-white/50">

//                 <p>Shipping</p>
//                 <p>Returns</p>
//                 <p>Privacy</p>
//                 <p>Terms</p>
//                 <p>Support</p>

//               </div>

//             </div>

//           </div>

//           <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-white/20">

//             <p>
//               © 2026 AQUA WATER. All rights reserved.
//             </p>

//             <p>
//               Designed for pure experiences.
//             </p>

//           </div>

//         </div>

//       </footer>

//     </main>
//   );
// };

// export default App;
 

















































// ====================================================
















// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const App = () => {
//   const mainRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       /* =========================================================
//          HERO
//       ========================================================= */

//       const heroTimeline = gsap.timeline({
//         defaults: {
//           ease: "power4.out",
//         },
//       });

//       heroTimeline
//         .from(".nav", {
//           y: -40,
//           opacity: 0,
//           duration: 0.9,
//         })
//         .from(
//           ".hero-eyebrow",
//           {
//             y: 30,
//             opacity: 0,
//             duration: 0.7,
//           },
//           "-=0.4"
//         )
//         .from(
//           ".hero-title-line",
//           {
//             yPercent: 110,
//             opacity: 0,
//             stagger: 0.12,
//             duration: 1.1,
//           },
//           "-=0.3"
//         )
//         .from(
//           ".hero-description",
//           {
//             y: 30,
//             opacity: 0,
//             duration: 0.8,
//           },
//           "-=0.6"
//         )
//         .from(
//           ".hero-actions",
//           {
//             y: 25,
//             opacity: 0,
//             duration: 0.7,
//           },
//           "-=0.5"
//         )
//         .from(
//           ".hero-bottle",
//           {
//             scale: 0.75,
//             y: 100,
//             opacity: 0,
//             rotation: -8,
//             duration: 1.3,
//           },
//           "-=0.8"
//         )
//         .from(
//           ".hero-orbit",
//           {
//             scale: 0.4,
//             opacity: 0,
//             duration: 1.2,
//           },
//           "-=1"
//         );

//       /* =========================================================
//          GENERIC REVEALS
//       ========================================================= */

//       gsap.utils.toArray(".reveal-up").forEach((element) => {
//         gsap.from(element, {
//           y: 70,
//           opacity: 0,
//           duration: 1,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: element,
//             start: "top 85%",
//           },
//         });
//       });

//       gsap.utils.toArray(".reveal-left").forEach((element) => {
//         gsap.from(element, {
//           x: -80,
//           opacity: 0,
//           duration: 1,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: element,
//             start: "top 80%",
//           },
//         });
//       });

//       gsap.utils.toArray(".reveal-right").forEach((element) => {
//         gsap.from(element, {
//           x: 80,
//           opacity: 0,
//           duration: 1,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: element,
//             start: "top 80%",
//           },
//         });
//       });

//       /* =========================================================
//          STATS
//       ========================================================= */

//       gsap.from(".stat-item", {
//         y: 50,
//         opacity: 0,
//         stagger: 0.12,
//         duration: 0.8,
//         scrollTrigger: {
//           trigger: ".stats-section",
//           start: "top 80%",
//         },
//       });

//       /* =========================================================
//          PRODUCT CARDS
//       ========================================================= */

//       gsap.from(".product-card", {
//         y: 80,
//         opacity: 0,
//         scale: 0.96,
//         stagger: 0.12,
//         duration: 0.9,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: ".products-grid",
//           start: "top 80%",
//         },
//       });

//       /* =========================================================
//          WHY US
//       ========================================================= */

//       gsap.from(".why-card", {
//         y: 60,
//         opacity: 0,
//         stagger: 0.1,
//         duration: 0.8,
//         scrollTrigger: {
//           trigger: ".why-grid",
//           start: "top 80%",
//         },
//       });

//       /* =========================================================
//          PROCESS
//       ========================================================= */

//       gsap.from(".process-line", {
//         scaleX: 0,
//         transformOrigin: "left center",
//         duration: 1.4,
//         ease: "power3.inOut",
//         scrollTrigger: {
//           trigger: ".process-section",
//           start: "top 70%",
//         },
//       });

//       gsap.from(".process-item", {
//         y: 60,
//         opacity: 0,
//         stagger: 0.15,
//         duration: 0.8,
//         scrollTrigger: {
//           trigger: ".process-grid",
//           start: "top 80%",
//         },
//       });

//       /* =========================================================
//          IMAGE PARALLAX
//       ========================================================= */

//       gsap.utils.toArray(".parallax-image").forEach((image) => {
//         gsap.to(image, {
//           yPercent: -10,
//           ease: "none",
//           scrollTrigger: {
//             trigger: image,
//             start: "top bottom",
//             end: "bottom top",
//             scrub: true,
//           },
//         });
//       });

//       /* =========================================================
//          TESTIMONIALS
//       ========================================================= */

//       gsap.from(".testimonial-card", {
//         y: 60,
//         opacity: 0,
//         stagger: 0.15,
//         duration: 0.9,
//         scrollTrigger: {
//           trigger: ".testimonials-grid",
//           start: "top 80%",
//         },
//       });

//       /* =========================================================
//          CONTACT
//       ========================================================= */

//       gsap.from(".contact-content", {
//         x: -60,
//         opacity: 0,
//         duration: 1,
//         scrollTrigger: {
//           trigger: ".contact-section",
//           start: "top 75%",
//         },
//       });

//       gsap.from(".contact-form", {
//         x: 60,
//         opacity: 0,
//         duration: 1,
//         scrollTrigger: {
//           trigger: ".contact-section",
//           start: "top 75%",
//         },
//       });
//     }, mainRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <main
//       ref={mainRef}
//       className="bg-[#f5f3ed] text-[#17221e] overflow-hidden"
//     >
//       {/* =========================================================
//           NAVBAR
//       ========================================================= */}

//       <nav className="nav fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-4">
//         <div className="max-w-7xl mx-auto px-5 md:px-7 py-3 rounded-full border border-black/10 bg-[#f5f3ed]/90 backdrop-blur-xl flex items-center justify-between shadow-sm">
          
//           {/* LOGO */}

//           <a
//             href="#home"
//             className="flex items-center gap-3 group"
//           >
//             <div className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center overflow-hidden border border-black/10 shadow-sm">
//               <div className="text-[#17221e] font-black text-[10px] tracking-tight">
//                 JAM
//               </div>
//             </div>

//             <div className="hidden sm:block leading-none">
//               <div className="font-black tracking-[-0.04em] text-lg">
//                 JAMBOONEER
//               </div>

//               <div className="text-[8px] tracking-[0.28em] uppercase text-black/40 mt-1">
//                 Pure Water
//               </div>
//             </div>
//           </a>

//           {/* DESKTOP MENU */}

//           <div className="hidden lg:flex items-center gap-8">
//             {[
//               "About",
//               "Products",
//               "Why Us",
//               "Process",
//               "Contact",
//             ].map((item) => (
//               <a
//                 key={item}
//                 href={`#${item.toLowerCase().replace(" ", "-")}`}
//                 className="text-[11px] uppercase tracking-[0.18em] font-semibold text-black/60 hover:text-[#174c3b] transition-colors"
//               >
//                 {item}
//               </a>
//             ))}
//           </div>

//           {/* CTA */}

//           <button className="px-5 md:px-7 py-2.5 rounded-full bg-[#174c3b] text-white text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] hover:bg-[#0e3c2d] hover:scale-105 transition-all">
//             Order Now
//           </button>
//         </div>
//       </nav>

//       {/* =========================================================
//           HERO
//       ========================================================= */}

//       <section
//         id="home"
//         className="relative min-h-screen pt-32 md:pt-36 pb-20 flex items-center overflow-hidden"
//       >
//         {/* Background */}

//         <div className="absolute inset-0 bg-[#f5f3ed]" />

//         {/* Organic background shape */}

//         <div className="absolute -right-40 top-20 w-[600px] h-[600px] rounded-full bg-[#dce9df] blur-3xl opacity-70" />

//         <div className="absolute -left-40 bottom-0 w-[500px] h-[500px] rounded-full bg-[#e6dfc9] blur-3xl opacity-50" />

//         <div className="max-w-7xl mx-auto px-6 md:px-10 w-full relative z-10">
//           <div className="grid lg:grid-cols-[1.1fr_.9fr] items-center gap-12">

//             {/* HERO CONTENT */}

//             <div>
//               <div className="hero-eyebrow flex items-center gap-3 mb-7">
//                 <span className="w-8 h-px bg-[#174c3b]" />

//                 <p className="text-[10px] uppercase tracking-[0.35em] text-[#174c3b] font-bold">
//                   Pure water. Honest delivery.
//                 </p>
//               </div>

//               <h1 className="font-black tracking-[-0.075em] leading-[0.86] text-[17vw] sm:text-[12vw] md:text-[9vw] lg:text-[7.5vw]">
//                 <span className="hero-title-line block overflow-hidden">
//                   <span className="inline-block">
//                     Purity
//                   </span>
//                 </span>

//                 <span className="hero-title-line block overflow-hidden">
//                   <span className="inline-block text-[#174c3b]">
//                     Poured.
//                   </span>
//                 </span>

//                 <span className="hero-title-line block overflow-hidden">
//                   <span className="inline-block">
//                     With Purpose.
//                   </span>
//                 </span>
//               </h1>

//               <p className="hero-description max-w-xl mt-8 text-sm md:text-base leading-relaxed text-black/55">
//                 Jambooneer brings rigorously purified,
//                 mineral-balanced water straight to your home,
//                 office, or event — clean water, honest delivery,
//                 every single time.
//               </p>

//               <div className="hero-actions flex flex-wrap items-center gap-4 mt-9">
//                 <button className="px-7 py-4 rounded-full bg-[#174c3b] text-white text-[10px] uppercase tracking-[0.18em] font-bold hover:scale-105 transition-transform">
//                   Explore Jambooneer
//                 </button>

//                 <a
//                   href="#process"
//                   className="px-6 py-4 text-[10px] uppercase tracking-[0.18em] font-bold text-[#174c3b]"
//                 >
//                   How it works →
//                 </a>
//               </div>
//             </div>

//             {/* HERO VISUAL */}

//             <div className="relative flex items-center justify-center min-h-[500px]">
              
//               <div className="hero-orbit absolute w-[390px] h-[390px] md:w-[500px] md:h-[500px] rounded-full border border-[#174c3b]/10" />

//               <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-[#dbe8df]" />

//               <div className="absolute top-12 right-4 md:right-12 bg-white rounded-2xl px-5 py-4 shadow-xl rotate-3">
//                 <div className="text-2xl font-black text-[#174c3b]">
//                   99.9%
//                 </div>

//                 <div className="text-[8px] uppercase tracking-[0.2em] text-black/40">
//                   Purity Tested
//                 </div>
//               </div>

//               <img
//                 className="hero-bottle relative z-10 w-[210px] md:w-[270px] lg:w-[310px] drop-shadow-[20px_35px_30px_rgba(0,0,0,0.2)]"
//                 src="https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=700&q=85"
//                 alt="Premium water bottle"
//               />

//               <div className="absolute bottom-12 left-0 md:left-10 bg-[#174c3b] text-white rounded-2xl px-5 py-4 -rotate-3 shadow-xl">
//                 <div className="text-[9px] uppercase tracking-[0.2em] text-white/60">
//                   Delivery
//                 </div>

//                 <div className="text-lg font-bold">
//                   Same Day
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Hero bottom */}

//         <div className="absolute bottom-7 left-1/2 -translate-x-1/2 text-center">
//           <p className="text-[8px] uppercase tracking-[0.4em] text-black/30">
//             Scroll to discover
//           </p>
//         </div>
//       </section>

//       {/* =========================================================
//           STATS
//       ========================================================= */}

//       <section className="stats-section bg-[#174c3b] text-white py-12">
//         <div className="max-w-7xl mx-auto px-6 md:px-10">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

//             {[
//               ["10,000+", "Happy Customers"],
//               ["99.9%", "Purity Tested"],
//               ["24/7", "Delivery Support"],
//               ["7-Stage", "Purification"],
//             ].map(([number, label]) => (
//               <div
//                 key={label}
//                 className="stat-item text-center md:text-left"
//               >
//                 <div className="text-3xl md:text-4xl font-black tracking-tight">
//                   {number}
//                 </div>

//                 <div className="text-[9px] uppercase tracking-[0.22em] text-white/50 mt-2">
//                   {label}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           CERTIFICATION STRIP
//       ========================================================= */}

//       <section className="py-5 border-b border-black/10">
//         <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-x-8 gap-y-3 text-[9px] uppercase tracking-[0.2em] text-black/40">
//           <span>FSSAI Certified</span>
//           <span>•</span>
//           <span>ISI Certified</span>
//           <span>•</span>
//           <span>Same-Day Delivery</span>
//           <span>•</span>
//           <span>Zero Plastic Waste</span>
//           <span>•</span>
//           <span>Lab Verified</span>
//         </div>
//       </section>

//       {/* =========================================================
//           OUR STORY
//       ========================================================= */}

//       <section
//         id="about"
//         className="py-24 md:py-36"
//       >
//         <div className="max-w-7xl mx-auto px-6 md:px-10">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">

//             <div className="reveal-left">
//               <p className="text-[10px] uppercase tracking-[0.35em] text-[#174c3b] font-bold mb-5">
//                 Our Story
//               </p>

//               <h2 className="text-5xl md:text-7xl font-black tracking-[-0.06em] leading-[0.9]">
//                 Where Every
//                 <br />
//                 <span className="text-[#174c3b]">
//                   Drop Has Purpose.
//                 </span>
//               </h2>

//               <p className="mt-8 text-black/55 leading-relaxed max-w-xl">
//                 We didn't set out to sell water. We set out
//                 to earn your trust, one delivery at a time.
//               </p>

//               <p className="mt-5 text-black/50 leading-relaxed max-w-xl text-sm">
//                 Jambooneer began with one simple conviction —
//                 that clean, safe, great-tasting water shouldn't
//                 be a privilege, it should be a promise kept to
//                 every home, office, and celebration we serve.
//               </p>

//               <div className="mt-8 flex items-center gap-4">
//                 <div className="w-10 h-10 rounded-full bg-[#174c3b] text-white flex items-center justify-center text-sm">
//                   ✓
//                 </div>

//                 <p className="text-sm font-semibold">
//                   Clean water. Honest delivery.
//                 </p>
//               </div>
//             </div>

//             <div className="reveal-right relative h-[500px] overflow-hidden rounded-[2rem]">
//               <img
//                 className="parallax-image w-full h-[115%] object-cover"
//                 src="https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=1000&q=85"
//                 alt="Fresh natural water"
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

//               <div className="absolute bottom-7 left-7 text-white">
//                 <p className="text-[9px] uppercase tracking-[0.3em] text-white/60">
//                   Our commitment
//                 </p>

//                 <p className="text-2xl font-bold mt-2">
//                   Every drop matters.
//                 </p>
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           PRODUCTS
//       ========================================================= */}

//       <section
//         id="products"
//         className="py-24 md:py-32 bg-[#e8ebe3]"
//       >
//         <div className="max-w-7xl mx-auto px-6 md:px-10">

//           <div className="reveal-up max-w-2xl mb-14">
//             <p className="text-[10px] uppercase tracking-[0.35em] text-[#174c3b] font-bold mb-5">
//               What We Offer
//             </p>

//             <h2 className="text-5xl md:text-7xl font-black tracking-[-0.06em] leading-[0.9]">
//               One Brand.
//               <br />
//               <span className="text-[#174c3b]">
//                 Every Kind of Thirst.
//               </span>
//             </h2>

//             <p className="mt-6 text-black/50 max-w-xl">
//               From a single bottle to a fleet of tankers —
//               Jambooneer scales to meet you where you are.
//             </p>
//           </div>

//           <div className="products-grid grid md:grid-cols-2 lg:grid-cols-3 gap-5">

//             {[
//               {
//                 title: "Packaged Drinking Water",
//                 text: "Crisp, refreshing water for daily life, on the move or at home.",
//                 image:
//                   "https://images.unsplash.com/photo-1564419320461-6870880221ad?auto=format&fit=crop&w=800&q=85",
//               },
//               {
//                 title: "Dealer Partnership",
//                 text: "Build a business on a water brand people can trust.",
//                 image:
//                   "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=85",
//               },
//               {
//                 title: "Bulk Water Supply",
//                 text: "Dependable tanker delivery for sites and businesses.",
//                 image:
//                   "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=85",
//               },
//               {
//                 title: "Mineral-Enriched Water",
//                 text: "Thoughtfully balanced water for everyday hydration.",
//                 image:
//                   "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=800&q=85",
//               },
//               {
//                 title: "Office Water Solutions",
//                 text: "Hydration handled so your team doesn't have to think about it.",
//                 image:
//                   "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=85",
//               },
//               {
//                 title: "Event Water Packages",
//                 text: "Because every celebration deserves water as polished as the occasion.",
//                 image:
//                   "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=85",
//               },
//             ].map((product) => (
//               <article
//                 key={product.title}
//                 className="product-card group bg-white rounded-[1.5rem] overflow-hidden"
//               >
//                 <div className="h-56 overflow-hidden">
//                   <img
//                     src={product.image}
//                     alt={product.title}
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
//                   />
//                 </div>

//                 <div className="p-7">
//                   <div className="w-8 h-px bg-[#174c3b] mb-5" />

//                   <h3 className="text-xl font-black tracking-tight">
//                     {product.title}
//                   </h3>

//                   <p className="text-sm text-black/50 leading-relaxed mt-3">
//                     {product.text}
//                   </p>

//                   <button className="mt-6 text-[9px] uppercase tracking-[0.2em] font-bold text-[#174c3b]">
//                     Explore →
//                   </button>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           WHY US
//       ========================================================= */}

//       <section
//         id="why-us"
//         className="py-24 md:py-36"
//       >
//         <div className="max-w-7xl mx-auto px-6 md:px-10">

//           <div className="grid lg:grid-cols-[.8fr_1.2fr] gap-16">

//             <div className="reveal-left">
//               <p className="text-[10px] uppercase tracking-[0.35em] text-[#174c3b] font-bold mb-5">
//                 Why Jambooneer
//               </p>

//               <h2 className="text-5xl md:text-7xl font-black tracking-[-0.06em] leading-[0.9]">
//                 Trust,
//                 <br />
//                 <span className="text-[#174c3b]">
//                   Engineered.
//                 </span>
//               </h2>

//               <p className="mt-7 text-black/50 leading-relaxed max-w-md">
//                 We don't just purify water. We engineer
//                 confidence, drop by drop.
//               </p>
//             </div>

//             <div className="why-grid grid sm:grid-cols-2 gap-5">

//               {[
//                 [
//                   "01",
//                   "Pure at the Source",
//                   "Multi-stage RO + UV + mineral balancing engineered for taste and safety.",
//                 ],
//                 [
//                   "02",
//                   "Same-Day Delivery",
//                   "Order before cutoff and receive it the same day.",
//                 ],
//                 [
//                   "03",
//                   "Lab-Verified Always",
//                   "Every batch checked across extensive safety and quality parameters.",
//                 ],
//                 [
//                   "04",
//                   "Support That Never Sleeps",
//                   "WhatsApp, call, or email — we're always one message away.",
//                 ],
//               ].map(([number, title, text]) => (
//                 <div
//                   key={number}
//                   className="why-card border-t border-black/10 pt-6"
//                 >
//                   <span className="text-[10px] text-[#174c3b] font-bold">
//                     {number}
//                   </span>

//                   <h3 className="text-xl font-black mt-4">
//                     {title}
//                   </h3>

//                   <p className="text-sm text-black/50 leading-relaxed mt-3">
//                     {text}
//                   </p>
//                 </div>
//               ))}

//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           QUALITY FEATURE
//       ========================================================= */}

//       <section className="relative bg-[#174c3b] text-white py-24 md:py-32 overflow-hidden">
//         <div className="max-w-7xl mx-auto px-6 md:px-10">

//           <div className="grid lg:grid-cols-2 gap-16 items-center">

//             <div className="reveal-left">
//               <p className="text-[10px] uppercase tracking-[0.35em] text-white/50 font-bold">
//                 Built For Confidence
//               </p>

//               <h2 className="text-5xl md:text-7xl font-black tracking-[-0.06em] leading-[0.9] mt-5">
//                 Seven Stages.
//                 <br />
//                 One Promise.
//               </h2>

//               <p className="mt-7 text-white/55 leading-relaxed max-w-lg">
//                 Every bottle passes through a rigorous
//                 purification process before it reaches you.
//               </p>

//               <div className="mt-8 flex flex-wrap gap-3">
//                 {[
//                   "FSSAI Certified",
//                   "ISI Mark",
//                   "ISO 9001:2015",
//                   "NABL Tested",
//                 ].map((item) => (
//                   <span
//                     key={item}
//                     className="px-4 py-2 rounded-full border border-white/15 text-[9px] uppercase tracking-[0.15em] text-white/70"
//                   >
//                     {item}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             <div className="reveal-right">
//               <div className="relative h-[420px] rounded-[2rem] overflow-hidden">
//                 <img
//                   className="parallax-image w-full h-[115%] object-cover"
//                   src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=85"
//                   alt="Water purification facility"
//                 />

//                 <div className="absolute inset-0 bg-black/30" />

//                 <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5">
//                   <div className="text-[9px] uppercase tracking-[0.2em] text-white/50">
//                     Purification
//                   </div>

//                   <div className="text-lg font-bold mt-2">
//                     Sediment → RO → UV → UF → Minerals → Ozonation → QC
//                   </div>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           PROCESS
//       ========================================================= */}

//       <section
//         id="process"
//         className="process-section py-24 md:py-36"
//       >
//         <div className="max-w-7xl mx-auto px-6 md:px-10">

//           <div className="reveal-up text-center max-w-2xl mx-auto">
//             <p className="text-[10px] uppercase tracking-[0.35em] text-[#174c3b] font-bold">
//               How It Works
//             </p>

//             <h2 className="text-5xl md:text-7xl font-black tracking-[-0.06em] leading-[0.9] mt-5">
//               Pure Water,
//               <br />
//               <span className="text-[#174c3b]">
//                 Four Simple Steps.
//               </span>
//             </h2>
//           </div>

//           <div className="process-grid relative grid md:grid-cols-4 gap-8 mt-20">

//             <div className="process-line hidden md:block absolute top-8 left-[12%] right-[12%] h-px bg-[#174c3b]/20" />

//             {[
//               [
//                 "01",
//                 "Place Your Order",
//                 "Order via WhatsApp, our website, or a quick call.",
//               ],
//               [
//                 "02",
//                 "Order Confirmed",
//                 "Instant confirmation with your delivery window.",
//               ],
//               [
//                 "03",
//                 "We Deliver",
//                 "Fresh, sealed and quality-tagged at your doorstep.",
//               ],
//               [
//                 "04",
//                 "Enjoy Pure Water",
//                 "Hydrate with confidence and tell us how we did.",
//               ],
//             ].map(([number, title, text]) => (
//               <div
//                 key={number}
//                 className="process-item relative z-10 text-center"
//               >
//                 <div className="w-16 h-16 rounded-full bg-[#f5f3ed] border border-[#174c3b]/20 mx-auto flex items-center justify-center text-sm font-black text-[#174c3b]">
//                   {number}
//                 </div>

//                 <h3 className="text-lg font-black mt-7">
//                   {title}
//                 </h3>

//                 <p className="text-sm text-black/45 leading-relaxed mt-3 max-w-[220px] mx-auto">
//                   {text}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           BIG VISUAL STATEMENT
//       ========================================================= */}

//       <section className="relative min-h-[650px] flex items-center overflow-hidden">
//         <img
//           className="parallax-image absolute inset-0 w-full h-[115%] object-cover"
//           src="https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1800&q=85"
//           alt="Fresh water landscape"
//         />

//         <div className="absolute inset-0 bg-black/45" />

//         <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full">
//           <div className="max-w-3xl reveal-up">
//             <p className="text-[10px] uppercase tracking-[0.35em] text-white/60">
//               A commitment beyond the bottle
//             </p>

//             <h2 className="text-6xl md:text-8xl font-black tracking-[-0.07em] leading-[0.85] text-white mt-5">
//               Pure water
//               <br />
//               <span className="text-[#dbe8df]">
//                 deserves a pure
//               </span>
//               <br />
//               future.
//             </h2>

//             <p className="max-w-lg text-white/60 mt-8 leading-relaxed">
//               Our reusable jar system keeps thousands of
//               plastic bottles away from landfills every month.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           TESTIMONIALS
//       ========================================================= */}

//       <section className="py-24 md:py-36 bg-[#e8ebe3]">
//         <div className="max-w-7xl mx-auto px-6 md:px-10">

//           <div className="reveal-up text-center mb-14">
//             <p className="text-[10px] uppercase tracking-[0.35em] text-[#174c3b] font-bold">
//               Customer Voices
//             </p>

//             <h2 className="text-5xl md:text-7xl font-black tracking-[-0.06em] leading-[0.9] mt-5">
//               Loved by Homes,
//               <br />
//               <span className="text-[#174c3b]">
//                 Offices & Celebrations.
//               </span>
//             </h2>
//           </div>

//           <div className="testimonials-grid grid md:grid-cols-3 gap-5">

//             {[
//               {
//                 quote:
//                   "The consistency is what impressed us. Every delivery arrives exactly when promised.",
//                 name: "Rahul Mehta",
//                 role: "Office Manager",
//               },
//               {
//                 quote:
//                   "The water tastes clean and fresh. Their delivery team has been incredibly reliable.",
//                 name: "Priya Sharma",
//                 role: "Home Customer",
//               },
//               {
//                 quote:
//                   "For our wedding, the bulk delivery was seamless from start to finish.",
//                 name: "Ankit Verma",
//                 role: "Event Organizer",
//               },
//             ].map((item) => (
//               <article
//                 key={item.name}
//                 className="testimonial-card bg-white rounded-[1.5rem] p-7 md:p-9"
//               >
//                 <div className="text-[#174c3b] text-xl tracking-widest">
//                   ★★★★★
//                 </div>

//                 <p className="text-lg md:text-xl font-medium leading-relaxed mt-7">
//                   “{item.quote}”
//                 </p>

//                 <div className="mt-8 pt-6 border-t border-black/10">
//                   <div className="font-bold text-sm">
//                     {item.name}
//                   </div>

//                   <div className="text-[9px] uppercase tracking-[0.2em] text-black/40 mt-1">
//                     {item.role}
//                   </div>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           CONTACT
//       ========================================================= */}

//       <section
//         id="contact"
//         className="contact-section py-24 md:py-36"
//       >
//         <div className="max-w-7xl mx-auto px-6 md:px-10">

//           <div className="grid lg:grid-cols-2 gap-16">

//             <div className="contact-content">
//               <p className="text-[10px] uppercase tracking-[0.35em] text-[#174c3b] font-bold">
//                 Get In Touch
//               </p>

//               <h2 className="text-5xl md:text-7xl font-black tracking-[-0.06em] leading-[0.9] mt-5">
//                 Let's Start
//                 <br />
//                 Your
//                 <br />
//                 <span className="text-[#174c3b]">
//                   Pure Water Journey.
//                 </span>
//               </h2>

//               <p className="text-black/50 max-w-md leading-relaxed mt-7">
//                 Home, office, or a grand occasion — we're ready.
//                 Reach out and we'll respond within the hour.
//               </p>

//               <div className="grid grid-cols-2 gap-7 mt-10 max-w-md">

//                 <div>
//                   <div className="text-[9px] uppercase tracking-[0.2em] text-black/35">
//                     Location
//                   </div>

//                   <div className="font-semibold text-sm mt-2">
//                     Your City, India
//                   </div>
//                 </div>

//                 <div>
//                   <div className="text-[9px] uppercase tracking-[0.2em] text-black/35">
//                     Phone
//                   </div>

//                   <div className="font-semibold text-sm mt-2">
//                     +91 00000 00000
//                   </div>
//                 </div>

//                 <div>
//                   <div className="text-[9px] uppercase tracking-[0.2em] text-black/35">
//                     Email
//                   </div>

//                   <div className="font-semibold text-sm mt-2">
//                     hello@jambooneer.com
//                   </div>
//                 </div>

//                 <div>
//                   <div className="text-[9px] uppercase tracking-[0.2em] text-black/35">
//                     Office Hours
//                   </div>

//                   <div className="font-semibold text-sm mt-2">
//                     7 Days A Week
//                   </div>
//                 </div>

//               </div>
//             </div>

//             {/* FORM */}

//             <div className="contact-form bg-[#174c3b] text-white rounded-[2rem] p-7 md:p-10">

//               <p className="text-[9px] uppercase tracking-[0.3em] text-white/50">
//                 Request A Dealership
//               </p>

//               <h3 className="text-3xl md:text-4xl font-black tracking-tight mt-4">
//                 Let's build something
//                 <br />
//                 <span className="text-[#dbe8df]">
//                   refreshing.
//                 </span>
//               </h3>

//               <form className="mt-9 space-y-4">

//                 <input
//                   type="text"
//                   placeholder="Full Name"
//                   className="w-full bg-white/10 border border-white/10 rounded-xl px-5 py-4 outline-none placeholder:text-white/35 text-sm focus:border-white/30 transition"
//                 />

//                 <input
//                   type="tel"
//                   placeholder="Phone Number"
//                   className="w-full bg-white/10 border border-white/10 rounded-xl px-5 py-4 outline-none placeholder:text-white/35 text-sm focus:border-white/30 transition"
//                 />

//                 <input
//                   type="email"
//                   placeholder="Email Address"
//                   className="w-full bg-white/10 border border-white/10 rounded-xl px-5 py-4 outline-none placeholder:text-white/35 text-sm focus:border-white/30 transition"
//                 />

//                 <textarea
//                   rows="4"
//                   placeholder="Tell us how we can help..."
//                   className="w-full bg-white/10 border border-white/10 rounded-xl px-5 py-4 outline-none placeholder:text-white/35 text-sm focus:border-white/30 transition resize-none"
//                 />

//                 <button
//                   type="submit"
//                   className="w-full bg-[#f5f3ed] text-[#174c3b] rounded-xl py-4 text-[10px] uppercase tracking-[0.2em] font-black hover:bg-white transition"
//                 >
//                   Send Message →
//                 </button>

//               </form>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           FOOTER
//       ========================================================= */}

//       <footer className="bg-[#10251e] text-white pt-16 pb-8">

//         <div className="max-w-7xl mx-auto px-6 md:px-10">

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 pb-14">

//             <div className="lg:col-span-2">
//               <div className="text-3xl font-black tracking-[-0.05em]">
//                 JAMBOONEER
//               </div>

//               <p className="text-white/40 text-sm max-w-sm leading-relaxed mt-5">
//                 Pure water delivered with care, straight
//                 to your doorstep.
//               </p>

//               <div className="mt-7 text-[9px] uppercase tracking-[0.25em] text-white/30">
//                 Clean water · Honest delivery
//               </div>
//             </div>

//             <div>
//               <p className="text-[9px] uppercase tracking-[0.25em] text-white/30 mb-5">
//                 Products
//               </p>

//               <div className="space-y-3 text-sm text-white/55">
//                 <p>Packaged Water</p>
//                 <p>Dealership</p>
//                 <p>Bulk Supply</p>
//                 <p>Mineral Water</p>
//                 <p>Office Solutions</p>
//                 <p>Event Packages</p>
//               </div>
//             </div>

//             <div>
//               <p className="text-[9px] uppercase tracking-[0.25em] text-white/30 mb-5">
//                 Company
//               </p>

//               <div className="space-y-3 text-sm text-white/55">
//                 <p>About Us</p>
//                 <p>Why Choose Us</p>
//                 <p>How It Works</p>
//                 <p>Testimonials</p>
//                 <p>Contact</p>
//                 <p>Careers</p>
//               </div>
//             </div>

//           </div>

//           <div className="border-t border-white/10 pt-7 flex flex-col md:flex-row items-center justify-between gap-4">
//             <p className="text-[9px] uppercase tracking-[0.18em] text-white/30">
//               © 2026 Jambooneer. All rights reserved.
//             </p>

//             <p className="text-[9px] uppercase tracking-[0.18em] text-white/20">
//               Pure water. Poured with purpose.
//             </p>
//           </div>

//         </div>
//       </footer>
//     </main>
//   );
// };

// export default App;















// ____________________________________________________________________________________________










































// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { TextPlugin } from "gsap/TextPlugin"; // Assuming you might want to use it, though I'll use native DOM splitting for simplicity here
// import FirstImg from './assets/product2.png'
// gsap.registerPlugin(ScrollTrigger);

// const App = () => {
//   const mainRef = useRef(null);
//   const cursorDot = useRef(null);
//   const cursorRing = useRef(null);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     let ctx = gsap.context(() => {
//       /* =========================================================
//          1. CUSTOM CURSOR
//       ========================================================= */
//       const moveCursor = (e) => {
//         gsap.to(cursorDot.current, {
//           x: e.clientX,
//           y: e.clientY,
//           duration: 0.1,
//           ease: "power2.out",
//         });
//         gsap.to(cursorRing.current, {
//           x: e.clientX,
//           y: e.clientY,
//           duration: 0.4,
//           ease: "power3.out",
//         });
//       };
//       window.addEventListener("mousemove", moveCursor);

//       /* =========================================================
//          2. MAGNETIC BUTTONS
//       ========================================================= */
//       const magneticItems = document.querySelectorAll(".magnetic");
//       magneticItems.forEach((item) => {
//         item.addEventListener("mousemove", (e) => {
//           const rect = item.getBoundingClientRect();
//           const x = e.clientX - rect.left - rect.width / 2;
//           const y = e.clientY - rect.top - rect.height / 2;
//           gsap.to(item, { x: x * 0.4, y: y * 0.4, duration: 0.4, ease: "power2.out" });
//         });
//         item.addEventListener("mouseleave", () => {
//           gsap.to(item, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.3)" });
//         });
//       });



      
//       /* =========================================================
//          3. HERO ANIMATION (LOAD)
//       ========================================================= */
//       const heroTl = gsap.timeline();

//       // Navbar entrance
//       heroTl.from(".nav-elem", {
//         y: -30,
//         opacity: 0,
//         stagger: 0.05,
//         duration: 0.8,
//         ease: "power3.out",
//         delay: 0.2
//       });

//       // Text Reveal (Clipping Mask effect)
//       heroTl.from(".hero-line span", {
//         yPercent: 120,
//         stagger: 0.1,
//         duration: 1.2,
//         ease: "power4.out",
//       }, "-=0.5");

//       heroTl.from(".hero-sub, .hero-stat", {
//         opacity: 0,
//         y: 20,
//         stagger: 0.1,
//         duration: 1,
//         ease: "power3.out",
//       }, "-=0.8");

//       // Bottle Entrance & Float
//       heroTl.from(".hero-bottle", {
//         y: 100,
//         opacity: 0,
//         rotation: 10,
//         scale: 0.8,
//         duration: 1.5,
//         ease: "power4.out",
//       }, "-=1.2");

//       gsap.to(".hero-bottle", {
//         y: -20,
//         rotation: -2,
//         duration: 3,
//         repeat: -1,
//         yoyo: true,
//         ease: "sine.inOut"
//       });

//       // Continuous Marquee
//       gsap.to(".marquee-track", {
//         xPercent: -50,
//         ease: "none",
//         duration: 20,
//         repeat: -1,
//       });

//       /* =========================================================
//          4. SCROLL REVEALS (GLOBAL)
//       ========================================================= */
      
//       // Text Line Reveals (Titles)
//       const titles = gsap.utils.toArray(".reveal-title");
//       titles.forEach((title) => {
//         gsap.from(title.querySelectorAll("span"), {
//           scrollTrigger: {
//             trigger: title,
//             start: "top 85%",
//           },
//           yPercent: 100,
//           stagger: 0.1,
//           duration: 1,
//           ease: "power4.out"
//         });
//       });

//       // Fade Up Elements
//       const fadeUps = gsap.utils.toArray(".fade-up");
//       fadeUps.forEach((elem) => {
//         gsap.from(elem, {
//           scrollTrigger: {
//             trigger: elem,
//             start: "top 85%",
//           },
//           y: 50,
//           opacity: 0,
//           duration: 1,
//           ease: "power3.out"
//         });
//       });

//       /* =========================================================
//          5. SPECIFIC SECTION ANIMATIONS
//       ========================================================= */

//       // Image Parallax
//       gsap.utils.toArray(".parallax-img").forEach((img) => {
//         gsap.to(img, {
//           scrollTrigger: {
//             trigger: img.parentElement,
//             scrub: true,
//           },
//           yPercent: 20,
//           ease: "none"
//         });
//       });

//       // Products Stagger
//       gsap.from(".product-card", {
//         scrollTrigger: {
//           trigger: ".products-grid",
//           start: "top 80%",
//         },
//         y: 80,
//         opacity: 0,
//         stagger: 0.15,
//         duration: 1,
//         ease: "power3.out"
//       });

//       // Number Counters (Stats)
//       const counters = document.querySelectorAll(".counter-val");
//       counters.forEach((counter) => {
//         const target = parseFloat(counter.getAttribute("data-target"));
//         ScrollTrigger.create({
//           trigger: ".stats-section",
//           start: "top 80%",
//           once: true,
//           onEnter: () => {
//             gsap.to(counter, {
//               innerHTML: target,
//               duration: 2.5,
//               ease: "power3.out",
//               snap: { innerHTML: target % 1 === 0 ? 1 : 0.1 },
//               onUpdate: function() {
//                 // Formatting logic could go here
//               }
//             });
//           }
//         });
//       });

//       // Process Line Drawing
//       gsap.from(".process-line", {
//         scrollTrigger: {
//           trigger: ".process-container",
//           start: "top 60%",
//         },
//         scaleY: 0,
//         transformOrigin: "top center",
//         duration: 2,
//         ease: "power3.inOut"
//       });

//       gsap.from(".process-step", {
//         scrollTrigger: {
//           trigger: ".process-container",
//           start: "top 60%",
//         },
//         x: 50,
//         opacity: 0,
//         stagger: 0.4, // Timed with line draw
//         duration: 1,
//         ease: "power3.out"
//       });

//     }, mainRef);

//     return () => {
//       ctx.revert();
//       window.removeEventListener("mousemove", () => {});
//     };
//   }, []);

//   return (
//     <div ref={mainRef} className="bg-[#F8F7F3] text-[#0A261A] font-sans overflow-x-hidden selection:bg-[#0E4A35] selection:text-white">
      
//       {/* CUSTOM CURSOR */}
//       <div ref={cursorDot} className="hidden lg:block fixed top-0 left-0 w-2 h-2 bg-[#0E4A35] rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference" />
//       <div ref={cursorRing} className="hidden lg:block fixed top-0 left-0 w-10 h-10 border border-[#0E4A35]/40 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out" />

//       {/* ======================= NAVBAR ======================= */}
//       <nav className="fixed w-full top-0 z-50 py-4 px-6 md:px-12 pointer-events-none">
//         <div className="max-w-7xl mx-auto flex justify-between items-center bg-white/70 backdrop-blur-xl border border-white/40 px-6 py-3 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] pointer-events-auto">
          
//           <a href="#" className="nav-elem text-xl md:text-2xl font-black tracking-tighter text-[#0E4A35] uppercase magnetic">
//             JAMBOONEER
//           </a>

//           {/* Desktop Links */}
//           <div className="hidden md:flex gap-8 items-center text-sm font-semibold tracking-wider text-[#0A261A]/70 uppercase">
//             {['About', 'Products', 'Why Us', 'Process', 'Contact'].map((item) => (
//               <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="nav-elem hover:text-[#0E4A35] transition-colors relative group">
//                 {item}
//                 <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#0E4A35] transition-all duration-300 group-hover:w-full"></span>
//               </a>
//             ))}
//           </div>

//           <a href="#contact" className="nav-elem hidden md:inline-flex bg-[#0E4A35] text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#0A261A] transition-colors magnetic">
//             Order Now
//           </a>

//           {/* Mobile Toggle */}
//           <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden nav-elem text-[#0E4A35] p-2">
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path></svg>
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Menu Dropdown */}
//       <div className={`fixed inset-0 bg-[#F8F7F3] z-40 transition-transform duration-500 ease-in-out flex flex-col justify-center items-center gap-8 ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
//         {['About', 'Products', 'Why Us', 'Process', 'Contact'].map((item) => (
//           <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} onClick={() => setIsMenuOpen(false)} className="text-3xl font-bold uppercase tracking-widest text-[#0A261A]">
//             {item}
//           </a>
//         ))}
//       </div>

//       {/* ======================= HERO ======================= */}
//       <section className="relative min-h-screen pt-32 pb-20 px-6 md:px-12 flex flex-col justify-center overflow-hidden">
//         {/* BG Blurs */}
//         <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-[#C1D5CB]/30 blur-[100px] pointer-events-none" />
//         <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#0E4A35]/10 blur-[100px] pointer-events-none" />

//         <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-[1fr_0.8fr] gap-12 items-center relative z-10">
          
//           <div>
//             <div className="hero-sub flex items-center gap-3 mb-6">
//               <div className="w-8 h-[2px] bg-[#0E4A35]"></div>
//               <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0E4A35]">Purity Poured With Purpose</span>
//             </div>

//             <h1 className="text-[12vw] lg:text-[7vw] leading-[0.85] font-black tracking-tighter uppercase mb-8">
//               <div className="hero-line overflow-hidden"><span className="inline-block text-[#0A261A]">Clean Water.</span></div>
//               <div className="hero-line overflow-hidden"><span className="inline-block text-[#0E4A35]">Honest</span></div>
//               <div className="hero-line overflow-hidden"><span className="inline-block text-[#0A261A]">Delivery.</span></div>
//             </h1>

//             <p className="hero-sub max-w-lg text-lg text-[#0A261A]/70 leading-relaxed mb-10 font-medium">
//               Jambooneer brings rigorously purified, mineral-balanced water straight to your home, office, or event — clean water, honest delivery, every single time.
//             </p>

//             <div className="flex flex-wrap gap-8">
//               {[
//                 { val: "10,000+", label: "Happy Customers" },
//                 { val: "99.9%", label: "Purity Tested" },
//                 { val: "24/7", label: "Delivery Support" },
//                 { val: "7-Stage", label: "Purification" }
//               ].map((stat, i) => (
//                 <div key={i} className="hero-stat">
//                   <div className="text-2xl font-black text-[#0E4A35]">{stat.val}</div>
//                   <div className="text-[10px] uppercase tracking-widest font-bold text-[#0A261A]/50 mt-1">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="relative h-[60vh] lg:h-[80vh] flex items-center justify-center">
//             {/* Visual focus element (representing a drop/bottle abstractly) */}
//             <div className="absolute w-[300px] h-[400px] lg:w-[400px] lg:h-[550px] border border-[#0E4A35]/20 rounded-full scale-105 pointer-events-none"></div>
//             <img 
//               src={FirstImg }
//               alt="Pure Water" 
//               className="hero-bottle w-[280px] h-[380px] lg:w-[350px] lg:h-[500px] object-cover rounded-[2rem] shadow-2xl z-10"
//             />
//             {/* Badge */}
//             <div className="hero-stat absolute bottom-10 -left-10 lg:-left-20 bg-white p-5 rounded-2xl shadow-xl z-20 magnetic">
//               <div className="text-xs uppercase tracking-widest text-[#0A261A]/50 mb-1 font-bold">Tested</div>
//               <div className="text-xl font-black text-[#0E4A35]">Every Batch</div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Marquee */}
//       <div className="w-full bg-[#0E4A35] text-[#C1D5CB] py-4 overflow-hidden flex whitespace-nowrap relative z-20">
//         <div className="marquee-track flex gap-8 text-xs font-bold uppercase tracking-[0.2em]">
//           {[...Array(2)].map((_, i) => (
//             <React.Fragment key={i}>
//               <span>FSSAI Certified</span><span className="opacity-30">•</span>
//               <span>ISI Certified</span><span className="opacity-30">•</span>
//               <span>Same-Day Delivery</span><span className="opacity-30">•</span>
//               <span>Zero Plastic Waste</span><span className="opacity-30">•</span>
//               <span>Lab Verified Every Batch</span><span className="opacity-30">•</span>
//             </React.Fragment>
//           ))}
//         </div>
//       </div>

//       {/* ======================= OUR STORY ======================= */}
//       <section id="about" className="py-32 px-6 md:px-12 bg-white">
//         <div className="max-w-7xl mx-auto">
          
//           <div className="grid lg:grid-cols-2 gap-16 mb-32 items-center">
//             <div>
//               <h2 className="reveal-title text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] uppercase mb-8">
//                 <div className="overflow-hidden"><span className="inline-block">Where Every</span></div>
//                 <div className="overflow-hidden"><span className="inline-block text-[#0E4A35]">Drop Has</span></div>
//                 <div className="overflow-hidden"><span className="inline-block">A Purpose</span></div>
//               </h2>
//             </div>
            
//             <div className="fade-up space-y-6 text-lg text-[#0A261A]/70 font-medium">
//               <p className="text-2xl font-bold text-[#0A261A]">We didn't set out to sell water. We set out to earn your trust, one delivery at a time.</p>
//               <p>Jambooneer began with one simple conviction — that clean, safe, great-tasting water shouldn't be a privilege, it should be a promise kept to every home, office, and celebration we serve. That promise shapes everything: how we purify, how we pack, and how we show up at your door.</p>
//               <p>Every bottle, jar, and tanker that leaves our facility carries that commitment forward.</p>
//             </div>
//           </div>

//           <div className="border-t border-[#0A261A]/10 pt-20">
//             <h3 className="fade-up text-xs font-bold uppercase tracking-[0.2em] text-[#0E4A35] mb-12">What Sets Us Apart</h3>
//             <div className="grid md:grid-cols-3 gap-12">
//               {[
//                 { t: "Pure at the Source", d: "Multi-stage RO + UV + mineral balancing, engineered for taste and safety." },
//                 { t: "Sustainable by Design", d: "Reusable jars, eco-conscious packaging, a real zero-waste commitment." },
//                 { t: "Lab-Verified, Always", d: "Every batch checked across 200+ safety and quality parameters." }
//               ].map((item, i) => (
//                 <div key={i} className="fade-up group">
//                   <div className="text-5xl font-black text-[#C1D5CB] mb-6 transition-colors group-hover:text-[#0E4A35]">0{i+1}</div>
//                   <h4 className="text-xl font-bold uppercase tracking-tight mb-4">{item.t}</h4>
//                   <p className="text-[#0A261A]/70 leading-relaxed font-medium">{item.d}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//         </div>
//       </section>

//       {/* ======================= WHAT WE OFFER ======================= */}
//       <section id="products" className="py-32 px-6 md:px-12 bg-[#0E4A35] text-white">
//         <div className="max-w-7xl mx-auto">
          
//           <div className="text-center mb-24 max-w-3xl mx-auto">
//             <div className="fade-up text-xs font-bold uppercase tracking-[0.2em] text-[#C1D5CB] mb-4">What We Offer</div>
//             <h2 className="reveal-title text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] uppercase mb-8">
//               <div className="overflow-hidden"><span className="inline-block">One Brand,</span></div>
//               <div className="overflow-hidden"><span className="inline-block text-[#C1D5CB]">Every Kind of Thirst</span></div>
//             </h2>
//             <p className="fade-up text-lg text-white/70">From a single bottle to a fleet of tankers — Jambooneer scales to meet you where you are.</p>
//           </div>

//           <div className="products-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {[
//               { 
//                 t: "Packaged Drinking Water", 
//                 d: "Crisp, refreshing water for daily life, on the move or at home.", 
//                 f: ["BPA-free, food-grade plastic", "Tamper-evident caps", "Bulk packs available", "Chilled delivery"]
//               },
//               { 
//                 t: "Dealer Partnership", 
//                 d: "Build a business on a brand people already trust. Our Best Opportunity.", 
//                 f: ["Exclusive dealership", "Attractive margins", "Marketing support", "Reliable supply"]
//               },
//               { 
//                 t: "Bulk Water Supply", 
//                 d: "Dependable tanker delivery for sites and businesses that can't afford downtime.", 
//                 f: ["Flexible volumes", "Custom contracts", "Temp-controlled transport", "24/7 priority support"]
//               },
//               { 
//                 t: "Mineral-Enriched Water", 
//                 d: "Thoughtfully balanced for everyday wellness.", 
//                 f: ["pH balanced", "Enhanced electrolytes", "Doctor recommended", "Ideal for infants & seniors"]
//               },
//               { 
//                 t: "Office Solutions", 
//                 d: "Hydration, handled — so your team doesn't have to think about it.", 
//                 f: ["Dedicated account manager", "GST invoicing", "Dispenser maintenance", "Flexible plans"]
//               },
//               { 
//                 t: "Event Packages", 
//                 d: "Because every celebration deserves water as polished as the occasion.", 
//                 f: ["Branded labelling", "On-site setup", "Bulk discounts", "Last-minute availability"]
//               }
//             ].map((prod, i) => (
//               <div key={i} className="product-card bg-[#135a41] p-8 rounded-2xl hover:bg-white hover:text-[#0A261A] transition-colors duration-500 group flex flex-col h-full cursor-pointer">
//                 <h3 className="text-2xl font-black uppercase tracking-tight mb-4 group-hover:text-[#0E4A35]">{prod.t}</h3>
//                 <p className="text-white/70 group-hover:text-[#0A261A]/70 font-medium text-sm mb-8 flex-grow">{prod.d}</p>
//                 <ul className="space-y-3 border-t border-white/20 group-hover:border-[#0A261A]/10 pt-6">
//                   {prod.f.map((feature, j) => (
//                     <li key={j} className="flex items-start gap-3 text-xs font-bold uppercase tracking-wider text-white/90 group-hover:text-[#0A261A]/90">
//                       <span className="w-1.5 h-1.5 rounded-full bg-[#C1D5CB] group-hover:bg-[#0E4A35] mt-1 shrink-0"></span>
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ======================= WHY JAMBOONEER & STATS ======================= */}
//       <section id="why-us" className="py-32 px-6 md:px-12 bg-white overflow-hidden relative">
//         <div className="max-w-7xl mx-auto">
          
//           <div className="grid lg:grid-cols-2 gap-20">
//             {/* Sticky Left */}
//             <div className="lg:sticky top-32 h-fit">
//               <h2 className="reveal-title text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] uppercase mb-6">
//                 <div className="overflow-hidden"><span className="inline-block">Trust,</span></div>
//                 <div className="overflow-hidden"><span className="inline-block text-[#0E4A35]">Engineered Into</span></div>
//                 <div className="overflow-hidden"><span className="inline-block">Every Bottle</span></div>
//               </h2>
//               <p className="fade-up text-xl font-bold text-[#0A261A] mb-4">We don't just purify water. We engineer confidence, drop by drop.</p>
//               <p className="fade-up text-[#0A261A]/70 mb-10">Every bottle passes through a rigorous multi-stage process and independent lab verification before it ever reaches you — because in the water business, trust isn't claimed, it's proven.</p>
              
//               <div className="fade-up flex flex-wrap gap-4 text-xs font-bold uppercase tracking-widest text-[#0E4A35]">
//                 <span className="px-4 py-2 bg-[#F8F7F3] rounded-full">FSSAI Certified</span>
//                 <span className="px-4 py-2 bg-[#F8F7F3] rounded-full">ISI Mark</span>
//                 <span className="px-4 py-2 bg-[#F8F7F3] rounded-full">ISO 9001:2015</span>
//                 <span className="px-4 py-2 bg-[#F8F7F3] rounded-full">NABL Tested</span>
//               </div>
//             </div>

//             {/* Scrolling Right */}
//             <div className="space-y-12">
//               {[
//                 { t: "Multi-Stage Purification", d: "Sediment → RO → UV → UF → Minerals → Ozonation → Final QC Check." },
//                 { t: "Same-Day Delivery", d: "Order before cutoff, receive it the same day. No delays, no excuses." },
//                 { t: "Transparent Quality Reports", d: "Regular lab reports shared openly with our subscribers — nothing hidden." },
//                 { t: "Support That Never Sleeps", d: "WhatsApp, call, or email — we're always one message away." },
//                 { t: "A Commitment Beyond the Bottle", d: "Our reusable jar system keeps thousands of plastic bottles out of landfills every month — because pure water should mean a healthier planet too." }
//               ].map((item, i) => (
//                 <div key={i} className="fade-up border-b border-[#0A261A]/10 pb-12 group cursor-default">
//                   <div className="flex justify-between items-start mb-4">
//                     <h4 className="text-2xl font-black uppercase tracking-tight group-hover:text-[#0E4A35] transition-colors">{item.t}</h4>
//                     <span className="text-[#C1D5CB] font-black text-xl transition-transform group-hover:translate-x-2">→</span>
//                   </div>
//                   <p className="text-[#0A261A]/70 font-medium text-lg">{item.d}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Large Stats */}
//           <div className="stats-section mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-[#0A261A]/10 pt-16">
//             {[
//               { val: "10000", suffix: "+", label: "Happy Customers" },
//               { val: "50000", suffix: "+", label: "Bottles Delivered Daily" },
//               { val: "99.9", suffix: "%", label: "Purity Rate" },
//               { val: "15", suffix: "+", label: "Years Of Trust Built Locally" } // Added a dummy number for years to animate
//             ].map((stat, i) => (
//               <div key={i} className="text-center">
//                 <div className="text-5xl md:text-6xl font-black text-[#0E4A35] mb-2 font-mono flex justify-center">
//                   <span className="counter-val" data-target={stat.val}>0</span>
//                   <span>{stat.suffix}</span>
//                 </div>
//                 <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0A261A]/50">{stat.label}</div>
//               </div>
//             ))}
//           </div>

//         </div>
//       </section>

//       {/* ======================= HOW IT WORKS ======================= */}
//       <section id="process" className="py-32 px-6 md:px-12 bg-[#F8F7F3] relative overflow-hidden">
//         <div className="max-w-7xl mx-auto">
          
//           <div className="text-center mb-24">
//             <h2 className="reveal-title text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] uppercase">
//               <div className="overflow-hidden"><span className="inline-block text-[#0E4A35]">Pure Water,</span></div>
//               <div className="overflow-hidden"><span className="inline-block">Four Simple Steps</span></div>
//             </h2>
//           </div>

//           <div className="process-container relative max-w-4xl mx-auto">
//             {/* Vertical Line */}
//             <div className="absolute left-[23px] md:left-1/2 top-0 bottom-0 w-[2px] bg-[#0E4A35]/20 md:-translate-x-1/2">
//               <div className="process-line w-full h-full bg-[#0E4A35]"></div>
//             </div>

//             <div className="space-y-16 relative z-10">
//               {[
//                 { t: "Place Your Order", d: "Order via WhatsApp, our website, or a quick call — pick your product and delivery slot." },
//                 { t: "Order Confirmed", d: "Instant confirmation with your order ID and delivery window." },
//                 { t: "We Deliver", d: "Fresh, sealed, and quality-tagged — brought to you by our trained team." },
//                 { t: "Enjoy Pure Water", d: "Hydrate with confidence. Tell us how we did — we're always improving." }
//               ].map((step, i) => (
//                 <div key={i} className={`process-step flex flex-col md:flex-row items-start md:items-center gap-8 ${i % 2 !== 0 ? 'md:flex-row-reverse text-left md:text-right' : ''}`}>
//                   <div className="w-12 h-12 rounded-full bg-[#0E4A35] text-white flex items-center justify-center font-black text-xl shrink-0 relative md:absolute md:left-1/2 md:-translate-x-1/2 shadow-xl shadow-[#0E4A35]/20">
//                     {i+1}
//                   </div>
//                   <div className={`pl-16 md:pl-0 md:w-1/2 ${i % 2 !== 0 ? 'md:pr-16' : 'md:pl-16'}`}>
//                     <h3 className="text-2xl font-black uppercase tracking-tight mb-2 text-[#0A261A]">{step.t}</h3>
//                     <p className="text-[#0A261A]/70 font-medium">{step.d}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ======================= CUSTOMER VOICES ======================= */}
//       <section className="py-32 px-6 md:px-12 bg-white">
//         <div className="max-w-7xl mx-auto">
          
//           <div className="mb-20">
//             <div className="fade-up text-xs font-bold uppercase tracking-[0.2em] text-[#0E4A35] mb-4">Customer Voices</div>
//             <h2 className="reveal-title text-5xl md:text-6xl font-black tracking-tighter leading-[0.9] uppercase max-w-2xl">
//               <div className="overflow-hidden"><span className="inline-block">Loved by Homes,</span></div>
//               <div className="overflow-hidden"><span className="inline-block text-[#0E4A35]">Offices & Celebrations Alike</span></div>
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               { q: "The consistency is what impressed us. Every delivery arrives exactly when promised. Perfect for our daily office needs.", n: "Rahul Sharma", p: "HR Manager, TechCorp" },
//               { q: "The water tastes clean and fresh. You can literally taste the difference. Their delivery team is incredibly reliable.", n: "Priya Desai", p: "Fitness Instructor" },
//               { q: "For our wedding, the bulk delivery was seamless from start to finish. One less thing to worry about on a big day.", n: "Vikram & Anjali", p: "Wedding Event" }
//             ].map((test, i) => (
//               <div key={i} className="fade-up bg-[#F8F7F3] p-10 rounded-2xl hover:shadow-2xl transition-shadow duration-500 cursor-default">
//                 <div className="text-[#0E4A35] text-2xl mb-6">★★★★★</div>
//                 <p className="text-lg font-medium text-[#0A261A] mb-8 italic">"{test.q}"</p>
//                 <div className="border-t border-[#0A261A]/10 pt-6">
//                   <div className="font-bold uppercase tracking-tight text-[#0A261A] text-sm">{test.n}</div>
//                   <div className="text-xs uppercase tracking-widest text-[#0A261A]/50 mt-1">{test.p}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ======================= GET IN TOUCH ======================= */}
//       <section id="contact" className="py-32 px-6 md:px-12 bg-[#0E4A35] text-white overflow-hidden relative">
//         {/* Parallax Background Image */}
//         <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
//           <img className="parallax-img w-full h-[140%] object-cover -mt-[20%]" src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=1000&auto=format&fit=crop" alt="Water ripple" />
//         </div>

//         <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-20">
          
//           <div>
//             <h2 className="reveal-title text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] uppercase mb-6">
//               <div className="overflow-hidden"><span className="inline-block">Let's Start</span></div>
//               <div className="overflow-hidden"><span className="inline-block text-[#C1D5CB]">Your Pure Water</span></div>
//               <div className="overflow-hidden"><span className="inline-block">Journey</span></div>
//             </h2>
//             <p className="fade-up text-lg text-white/70 mb-12">Home, office, or a grand occasion — we're ready. Reach out and we'll respond within the hour.</p>

//             <div className="grid sm:grid-cols-2 gap-10">
//               {[
//                 { l: "Location", v: "123 Pure Flow Ave, Aqua District, City 40001" },
//                 { l: "Phone", v: "+91 98765 43210" },
//                 { l: "Email", v: "hello@jambooneer.com" },
//                 { l: "Office Hours", v: "8:00 AM - 8:00 PM · 7 Days a Week" }
//               ].map((info, i) => (
//                 <div key={i} className="fade-up">
//                   <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C1D5CB] mb-2">{info.l}</div>
//                   <div className="text-sm font-medium">{info.v}</div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Form */}
//           <div className="fade-up bg-white text-[#0A261A] p-10 rounded-[2rem] shadow-2xl">
//             <h3 className="text-2xl font-black uppercase tracking-tight mb-2">Request a Dealership</h3>
//             <p className="text-sm text-[#0A261A]/60 mb-8 font-medium">Or simply drop a message for bulk orders.</p>
            
//             <form className="space-y-6">
//               <div className="grid sm:grid-cols-2 gap-6">
//                 <div className="space-y-2">
//                   <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0A261A]/50 ml-2">Full Name</label>
//                   <input type="text" className="w-full bg-[#F8F7F3] border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#0E4A35] outline-none transition-all" placeholder="John Doe" />
//                 </div>
//                 <div className="space-y-2">
//                   <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0A261A]/50 ml-2">Phone Number</label>
//                   <input type="text" className="w-full bg-[#F8F7F3] border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#0E4A35] outline-none transition-all" placeholder="+91 XXXXX XXXXX" />
//                 </div>
//               </div>
              
//               <div className="space-y-2">
//                 <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0A261A]/50 ml-2">Email Address *</label>
//                 <input type="email" required className="w-full bg-[#F8F7F3] border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#0E4A35] outline-none transition-all" placeholder="john@example.com" />
//               </div>

//               <div className="space-y-2">
//                 <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0A261A]/50 ml-2">Message</label>
//                 <textarea rows="4" className="w-full bg-[#F8F7F3] border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#0E4A35] outline-none transition-all resize-none" placeholder="How can we help you?"></textarea>
//               </div>

//               <button className="w-full bg-[#0E4A35] text-white rounded-xl py-5 text-xs font-bold uppercase tracking-widest hover:bg-[#0A261A] transition-colors magnetic">
//                 Send Message
//               </button>
//             </form>
//           </div>

//         </div>
//       </section>

//       {/* ======================= FOOTER ======================= */}
//       <footer className="bg-[#0A261A] text-white pt-24 pb-10 px-6 md:px-12 border-t border-white/10">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            
//             <div className="lg:col-span-2">
//               <h2 className="text-3xl font-black uppercase tracking-tighter text-white mb-4">JAMBOONEER</h2>
//               <p className="text-white/60 max-w-sm mb-6 text-sm">Pure water delivered with care, straight to your doorstep.</p>
//             </div>

//             <div>
//               <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C1D5CB] mb-6">Products</h4>
//               <ul className="space-y-3 text-sm text-white/70">
//                 {['Packaged Water', 'Dealership', 'Bulk Supply', 'Mineral Water', 'Office Solutions', 'Event Packages'].map(link => (
//                   <li key={link}><a href="#" className="hover:text-white transition-colors">{link}</a></li>
//                 ))}
//               </ul>
//             </div>

//             <div>
//               <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C1D5CB] mb-6">Company</h4>
//               <ul className="space-y-3 text-sm text-white/70">
//                 {['About Us', 'Why Choose Us', 'How It Works', 'Testimonials', 'Contact', 'Careers'].map(link => (
//                   <li key={link}><a href="#" className="hover:text-white transition-colors">{link}</a></li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
//             <p>© 2026 Jambooneer. All rights reserved.</p>
//             <p>Designed for Purity</p>
//           </div>
//         </div>
//       </footer>

//     </div>
//   );
// };

// export default App;



















































































// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const images = {
//   hero:
//     "https://images.unsplash.com/photo-1559825481-12a05cc00344?auto=format&fit=crop&w=1800&q=90",

//   source:
//     "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1400&q=85",

//   bottle:
//     "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=90",

//   office:
//     "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=85",

//   event:
//     "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1400&q=85",

//   delivery:
//     "https://images.unsplash.com/photo-1586528116493-da8b5f6f9f1a?auto=format&fit=crop&w=1400&q=85",
// };

// const products = [
//   {
//     number: "01",
//     title: "Packaged Drinking Water",
//     text: "Crisp, refreshing water for daily life, on the move or at home.",
//     image: images.bottle,
//     items: [
//       "BPA-free, food-grade plastic",
//       "Tamper-evident sealed caps",
//       "Bulk packs available",
//       "Chilled delivery option",
//     ],
//   },
//   {
//     number: "02",
//     title: "Dealer Partnership",
//     text: "Build a business on a brand people already trust.",
//     image: images.office,
//     items: [
//       "Exclusive area-based dealership",
//       "Attractive profit margins",
//       "Marketing support",
//       "Reliable supply",
//     ],
//   },
//   {
//     number: "03",
//     title: "Bulk Water Supply",
//     text: "Dependable tanker delivery for sites and businesses.",
//     image: images.delivery,
//     items: [
//       "Flexible delivery volumes",
//       "Custom contracts",
//       "Reliable transport",
//       "24/7 priority support",
//     ],
//   },
//   {
//     number: "04",
//     title: "Mineral-Enriched Water",
//     text: "Thoughtfully balanced for everyday hydration.",
//     image: images.source,
//     items: [
//       "pH balanced",
//       "Enhanced electrolytes",
//       "Balanced minerals",
//       "Everyday hydration",
//     ],
//   },
//   {
//     number: "05",
//     title: "Office Water Solutions",
//     text: "Hydration, handled — so your team doesn't have to think about it.",
//     image: images.office,
//     items: [
//       "Dedicated account manager",
//       "GST-compliant invoicing",
//       "Dispenser maintenance",
//       "Flexible monthly plans",
//     ],
//   },
//   {
//     number: "06",
//     title: "Event Water Packages",
//     text: "Water as polished as the occasion itself.",
//     image: images.event,
//     items: [
//       "Branded bottle labelling",
//       "On-site setup",
//       "Bulk discounts",
//       "Last-minute availability",
//     ],
//   },
// ];

// const purification = [
//   "Sediment",
//   "RO",
//   "UV",
//   "UF",
//   "Minerals",
//   "Ozonation",
//   "Final QC",
// ];

// const testimonials = [
//   {
//     quote:
//       "The consistency is what keeps us coming back. Every delivery arrives exactly when promised.",
//     name: "Rahul Mehta",
//     role: "Operations Manager",
//   },
//   {
//     quote:
//       "The water tastes clean and balanced, and their delivery team has been incredibly reliable.",
//     name: "Ananya Sharma",
//     role: "Home Customer",
//   },
//   {
//     quote:
//       "For large events, reliability matters. Jambooneer handled the complete requirement without friction.",
//     name: "Vikram Jain",
//     role: "Event Coordinator",
//   },
// ];

// function App() {
//   const main = useRef(null);
//   const bottle = useRef(null);
//   const bottleWrap = useRef(null);
//   const cursor = useRef(null);
//   const cursorRing = useRef(null);

//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       /* =====================================================
//          CUSTOM CURSOR
//       ===================================================== */

//       const dot = cursor.current;
//       const ring = cursorRing.current;

//       const moveCursor = (e) => {
//         gsap.to(dot, {
//           x: e.clientX,
//           y: e.clientY,
//           duration: 0.12,
//           ease: "power2.out",
//         });

//         gsap.to(ring, {
//           x: e.clientX,
//           y: e.clientY,
//           duration: 0.45,
//           ease: "power3.out",
//         });
//       };

//       window.addEventListener("mousemove", moveCursor);

//       /* =====================================================
//          MAGNETIC BUTTONS
//       ===================================================== */

//       const magneticItems = document.querySelectorAll(".magnetic");

//       magneticItems.forEach((item) => {
//         const onMove = (e) => {
//           const rect = item.getBoundingClientRect();

//           const x =
//             e.clientX -
//             rect.left -
//             rect.width / 2;

//           const y =
//             e.clientY -
//             rect.top -
//             rect.height / 2;

//           gsap.to(item, {
//             x: x * 0.18,
//             y: y * 0.18,
//             duration: 0.5,
//             ease: "power3.out",
//           });
//         };

//         const onLeave = () => {
//           gsap.to(item, {
//             x: 0,
//             y: 0,
//             duration: 0.8,
//             ease: "elastic.out(1, 0.4)",
//           });
//         };

//         item.addEventListener("mousemove", onMove);
//         item.addEventListener("mouseleave", onLeave);

//         item._magneticMove = onMove;
//         item._magneticLeave = onLeave;
//       });

//       /* =====================================================
//          HERO INTRO
//       ===================================================== */

//       const hero = gsap.timeline({
//         defaults: {
//           ease: "power4.out",
//         },
//       });

//       hero
//         .from(".nav-shell", {
//           y: -30,
//           opacity: 0,
//           duration: 1,
//         })
//         .from(
//           ".hero-kicker",
//           {
//             y: 30,
//             opacity: 0,
//             duration: 0.8,
//           },
//           "-=0.5"
//         )
//         .from(
//           ".hero-title-line span",
//           {
//             yPercent: 110,
//             duration: 1.25,
//             stagger: 0.12,
//           },
//           "-=0.45"
//         )
//         .from(
//           ".hero-description",
//           {
//             y: 25,
//             opacity: 0,
//             duration: 0.9,
//           },
//           "-=0.65"
//         )
//         .from(
//           ".hero-stat",
//           {
//             y: 25,
//             opacity: 0,
//             stagger: 0.08,
//             duration: 0.8,
//           },
//           "-=0.55"
//         )
//         .from(
//           ".hero-action",
//           {
//             y: 20,
//             opacity: 0,
//             duration: 0.8,
//           },
//           "-=0.5"
//         )
//         .from(
//           bottleWrap.current,
//           {
//             y: 120,
//             opacity: 0,
//             scale: 0.75,
//             rotation: 8,
//             duration: 1.5,
//             ease: "power4.out",
//           },
//           "-=1.3"
//         );

//       /* =====================================================
//          BOTTLE FLOAT
//       ===================================================== */

//       gsap.to(bottle.current, {
//         y: -18,
//         rotation: -1.5,
//         duration: 3.2,
//         repeat: -1,
//         yoyo: true,
//         ease: "sine.inOut",
//       });

//       /* =====================================================
//          HERO → STORY BOTTLE TRANSITION
//          Bottle physically travels down with user.
//       ===================================================== */

//       gsap.timeline({
//         scrollTrigger: {
//           trigger: ".hero",
//           start: "top top",
//           end: "bottom top",
//           scrub: 1.2,
//         },
//       })
//         .to(bottleWrap.current, {
//           y: "52vh",
//           x: "-25vw",
//           rotation: 20,
//           scale: 0.65,
//           ease: "none",
//         })
//         .to(
//           bottle.current,
//           {
//             rotation: 55,
//             ease: "none",
//           },
//           0
//         );

//       /* =====================================================
//          HERO BACKGROUND PARALLAX
//       ===================================================== */

//       gsap.to(".hero-water-image", {
//         yPercent: 18,
//         ease: "none",
//         scrollTrigger: {
//           trigger: ".hero",
//           start: "top top",
//           end: "bottom top",
//           scrub: true,
//         },
//       });

//       /* =====================================================
//          GENERIC REVEALS
//       ===================================================== */

//       gsap.utils.toArray(".reveal-up").forEach((element) => {
//         gsap.from(element, {
//           y: 70,
//           opacity: 0,
//           duration: 1.1,
//           ease: "power4.out",
//           scrollTrigger: {
//             trigger: element,
//             start: "top 85%",
//             once: true,
//           },
//         });
//       });

//       /* =====================================================
//          STORY IMAGE
//       ===================================================== */

//       gsap.from(".story-image", {
//         clipPath: "inset(100% 0% 0% 0%)",
//         scale: 1.15,
//         duration: 1.5,
//         ease: "power4.out",
//         scrollTrigger: {
//           trigger: ".story-image",
//           start: "top 75%",
//           once: true,
//         },
//       });

//       gsap.to(".story-image img", {
//         yPercent: -12,
//         ease: "none",
//         scrollTrigger: {
//           trigger: ".story-image",
//           start: "top bottom",
//           end: "bottom top",
//           scrub: true,
//         },
//       });

//       /* =====================================================
//          STORY WORD
//       ===================================================== */

//       gsap.from(".story-word", {
//         xPercent: -30,
//         opacity: 0,
//         duration: 1.2,
//         ease: "power4.out",
//         scrollTrigger: {
//           trigger: ".story-word",
//           start: "top 80%",
//           once: true,
//         },
//       });

//       /* =====================================================
//          PRODUCT CARDS
//       ===================================================== */

//       gsap.utils.toArray(".product-card").forEach((card, index) => {
//         gsap.from(card, {
//           y: 100,
//           opacity: 0,
//           rotate: index % 2 === 0 ? -2 : 2,
//           duration: 1.1,
//           ease: "power4.out",
//           scrollTrigger: {
//             trigger: card,
//             start: "top 88%",
//             once: true,
//           },
//         });
//       });

//       /* =====================================================
//          QUALITY SECTION
//       ===================================================== */

//       gsap.from(".quality-line", {
//         scaleX: 0,
//         transformOrigin: "left center",
//         duration: 1.5,
//         ease: "power4.out",
//         scrollTrigger: {
//           trigger: ".quality-line",
//           start: "top 75%",
//           once: true,
//         },
//       });

//       gsap.utils.toArray(".quality-step").forEach((step, i) => {
//         gsap.from(step, {
//           y: 40,
//           opacity: 0,
//           duration: 0.8,
//           delay: i * 0.08,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: ".quality-grid",
//             start: "top 75%",
//             once: true,
//           },
//         });
//       });

//       /* =====================================================
//          STATS
//       ===================================================== */

//       gsap.utils.toArray(".big-stat").forEach((stat) => {
//         gsap.from(stat, {
//           y: 50,
//           opacity: 0,
//           duration: 1,
//           ease: "power4.out",
//           scrollTrigger: {
//             trigger: stat,
//             start: "top 85%",
//             once: true,
//           },
//         });
//       });

//       /* =====================================================
//          PROCESS IMAGE
//       ===================================================== */

//       gsap.from(".process-visual", {
//         scale: 0.88,
//         opacity: 0,
//         duration: 1.4,
//         ease: "power4.out",
//         scrollTrigger: {
//           trigger: ".process-visual",
//           start: "top 75%",
//           once: true,
//         },
//       });

//       /* =====================================================
//          TESTIMONIALS
//       ===================================================== */

//       gsap.from(".testimonial-card", {
//         y: 80,
//         opacity: 0,
//         stagger: 0.12,
//         duration: 1,
//         ease: "power4.out",
//         scrollTrigger: {
//           trigger: ".testimonial-grid",
//           start: "top 78%",
//           once: true,
//         },
//       });

//       /* =====================================================
//          CONTACT
//       ===================================================== */

//       gsap.from(".contact-panel", {
//         y: 80,
//         opacity: 0,
//         duration: 1.2,
//         ease: "power4.out",
//         scrollTrigger: {
//           trigger: ".contact-panel",
//           start: "top 80%",
//           once: true,
//         },
//       });

//       return () => {
//         window.removeEventListener("mousemove", moveCursor);

//         magneticItems.forEach((item) => {
//           item.removeEventListener("mousemove", item._magneticMove);
//           item.removeEventListener(
//             "mouseleave",
//             item._magneticLeave
//           );
//         });
//       };
//     }, main);

//     return () => ctx.revert();
//   }, []);

//   const closeMenu = () => setMenuOpen(false);

//   return (
//     <main
//       ref={main}
//       className="bg-[#f5fbfc] text-[#12343b] overflow-hidden selection:bg-[#8bdff0] selection:text-[#12343b]"
//     >
//       {/* =====================================================
//           CURSOR
//       ===================================================== */}

//       <div
//         ref={cursor}
//         className="hidden lg:block fixed top-0 left-0 w-2 h-2 rounded-full bg-[#12343b] pointer-events-none z-[999]"
//       />

//       <div
//         ref={cursorRing}
//         className="hidden lg:block fixed top-0 left-0 w-10 h-10 rounded-full border border-[#12343b]/30 pointer-events-none z-[998] -translate-x-1/2 -translate-y-1/2"
//       />

//       {/* =====================================================
//           NAVIGATION
//       ===================================================== */}

//       <nav className="fixed top-0 left-0 w-full z-[100] px-4 md:px-8 pt-4">
//         <div className="nav-shell max-w-7xl mx-auto bg-white/85 backdrop-blur-xl border border-[#12343b]/10 rounded-full px-5 md:px-7 py-3 flex items-center justify-between shadow-[0_15px_60px_rgba(18,52,59,0.08)]">

//           <a
//             href="#home"
//             className="flex items-center gap-3 group"
//           >
//             {/* Replace this box with your black JAMBOONEER logo */}
//             <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-white border border-[#12343b]/10 flex items-center justify-center overflow-hidden">
//               <span className="text-[7px] md:text-[8px] font-black tracking-[-0.08em] text-[#12343b]">
//                 JAM
//               </span>
//             </div>

//             <span className="hidden sm:block font-black tracking-[-0.04em] text-lg text-[#12343b]">
//               JAMBOONEER
//             </span>
//           </a>

//           <div className="hidden lg:flex items-center gap-8">
//             {[
//               ["About", "#about"],
//               ["Products", "#products"],
//               ["Why Us", "#why-us"],
//               ["Process", "#process"],
//               ["Contact", "#contact"],
//             ].map(([label, href]) => (
//               <a
//                 key={label}
//                 href={href}
//                 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#12343b]/70 hover:text-[#168aa0] transition-colors"
//               >
//                 {label}
//               </a>
//             ))}
//           </div>

//           <div className="flex items-center gap-3">
//             <a
//               href="#contact"
//               className="magnetic hidden sm:block px-5 py-3 rounded-full bg-[#12343b] text-white text-[9px] font-black uppercase tracking-[0.2em]"
//             >
//               Order Now
//             </a>

//             <button
//               onClick={() => setMenuOpen(!menuOpen)}
//               className="lg:hidden w-10 h-10 rounded-full bg-[#12343b] text-white flex items-center justify-center"
//             >
//               <div className="space-y-1">
//                 <span className="block w-4 h-px bg-white" />
//                 <span className="block w-4 h-px bg-white" />
//               </div>
//             </button>
//           </div>
//         </div>

//         {/* MOBILE MENU */}

//         <div
//           className={`lg:hidden fixed inset-0 bg-[#f5fbfc] z-[-1] flex flex-col justify-center px-8 transition-transform duration-700 ${
//             menuOpen ? "translate-y-0" : "-translate-y-full"
//           }`}
//         >
//           <p className="text-[10px] uppercase tracking-[0.35em] text-[#168aa0] mb-10">
//             Jambooneer
//           </p>

//           <div className="space-y-4">
//             {[
//               ["About", "#about"],
//               ["Products", "#products"],
//               ["Why Us", "#why-us"],
//               ["Process", "#process"],
//               ["Contact", "#contact"],
//             ].map(([label, href]) => (
//               <a
//                 key={label}
//                 href={href}
//                 onClick={closeMenu}
//                 className="block text-5xl font-black tracking-[-0.06em] text-[#12343b]"
//               >
//                 {label}
//               </a>
//             ))}
//           </div>
//         </div>
//       </nav>

//       {/* =====================================================
//           HERO
//       ===================================================== */}

//       <section
//         id="home"
//         className="hero relative min-h-screen overflow-hidden flex items-center bg-[#dff6fa]"
//       >
//         {/* atmospheric image */}

//         <div className="hero-water-image absolute inset-0 opacity-[0.16]">
//           <img
//             src={images.hero}
//             alt=""
//             className="w-full h-[120%] object-cover"
//           />
//         </div>

//         {/* soft water glow */}

//         <div className="absolute w-[55vw] h-[55vw] rounded-full bg-white/70 blur-[100px] right-[-15%] top-[-15%]" />

//         <div className="absolute w-[35vw] h-[35vw] rounded-full bg-[#78d8e8]/30 blur-[90px] left-[-10%] bottom-[-10%]" />

//         <div className="max-w-7xl mx-auto w-full px-6 md:px-10 pt-32 pb-20 relative z-10 grid lg:grid-cols-[1fr_0.75fr] gap-10 items-center">

//           {/* HERO CONTENT */}

//           <div className="relative z-20">

//             <div className="hero-kicker flex items-center gap-3 mb-7">
//               <span className="w-10 h-px bg-[#168aa0]" />

//               <span className="text-[9px] uppercase font-black tracking-[0.35em] text-[#168aa0]">
//                 Purity Poured With Purpose
//               </span>
//             </div>

//             <h1 className="font-black uppercase tracking-[-0.075em] leading-[0.82] text-[16vw] sm:text-[12vw] md:text-[9vw] lg:text-[7.2vw]">

//               <div className="hero-title-line overflow-hidden">
//                 <span className="inline-block text-[#12343b]">
//                   Purity
//                 </span>
//               </div>

//               <div className="hero-title-line overflow-hidden">
//                 <span className="inline-block text-[#168aa0]">
//                   Poured
//                 </span>
//               </div>

//               <div className="hero-title-line overflow-hidden">
//                 <span className="inline-block text-[#12343b]">
//                   With Purpose.
//                 </span>
//               </div>

//             </h1>

//             <p className="hero-description max-w-xl mt-8 text-sm md:text-lg text-[#12343b]/65 leading-[1.7]">
//               Jambooneer brings rigorously purified,
//               mineral-balanced water straight to your
//               home, office, or event — clean water,
//               honest delivery, every single time.
//             </p>

//             <div className="hero-action mt-9 flex flex-wrap items-center gap-4">

//               <a
//                 href="#products"
//                 className="magnetic inline-flex items-center gap-3 rounded-full bg-[#12343b] text-white px-7 py-4 text-[9px] font-black uppercase tracking-[0.2em]"
//               >
//                 Explore Water
//                 <span>↘</span>
//               </a>

//               <a
//                 href="#why-us"
//                 className="text-[9px] font-black uppercase tracking-[0.2em] text-[#12343b]/60 hover:text-[#168aa0]"
//               >
//                 Why Jambooneer
//               </a>

//             </div>

//             {/* STATS */}

//             <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-y-7 gap-x-5">

//               {[
//                 ["10,000+", "Happy Customers"],
//                 ["99.9%", "Purity Tested"],
//                 ["24/7", "Delivery Support"],
//                 ["7-Stage", "Purification"],
//               ].map(([value, label]) => (
//                 <div className="hero-stat" key={label}>
//                   <div className="text-xl md:text-2xl font-black tracking-tight text-[#12343b]">
//                     {value}
//                   </div>

//                   <div className="mt-1 text-[8px] uppercase tracking-[0.18em] font-bold text-[#12343b]/45">
//                     {label}
//                   </div>
//                 </div>
//               ))}

//             </div>

//           </div>

//           {/* BOTTLE */}

//           <div
//             ref={bottleWrap}
//             className="absolute right-[5%] lg:right-[8%] top-[52%] lg:top-[53%] -translate-y-1/2 z-30 pointer-events-none"
//           >

//             <div className="absolute inset-[-70px] rounded-full border border-white/80 scale-110" />

//             <div className="absolute inset-[-110px] rounded-full border border-[#168aa0]/10 scale-110" />

//             <div className="absolute w-[320px] h-[320px] rounded-full bg-white/70 blur-[70px]" />

//             <img
//               ref={bottle}
//               src={images.bottle}
//               alt="Jambooneer water bottle"
//               className="relative w-[145px] sm:w-[180px] md:w-[220px] lg:w-[260px] h-[390px] md:h-[500px] lg:h-[560px] object-cover rounded-[2rem] shadow-[0_50px_100px_rgba(20,100,120,0.25)]"
//             />

//             <div className="absolute -right-20 top-[22%] hidden md:block bg-white/90 backdrop-blur-xl px-5 py-4 rounded-2xl shadow-xl border border-white">

//               <p className="text-[8px] uppercase tracking-[0.2em] text-[#168aa0] font-black">
//                 Quality
//               </p>

//               <p className="text-xl font-black text-[#12343b]">
//                 99.9%
//               </p>

//               <p className="text-[8px] text-[#12343b]/40 uppercase tracking-widest">
//                 Purity tested
//               </p>

//             </div>

//           </div>

//         </div>

//         {/* bottom marker */}

//         <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">

//           <span className="text-[8px] uppercase tracking-[0.35em] text-[#12343b]/40">
//             Scroll to explore
//           </span>

//           <span className="w-px h-12 bg-gradient-to-b from-[#168aa0] to-transparent" />

//         </div>
//       </section>

//       {/* =====================================================
//           CERTIFICATION STRIP
//       ===================================================== */}

//       <div className="border-y border-[#12343b]/10 bg-white overflow-hidden">
//         <div className="py-5 flex justify-center flex-wrap gap-x-8 gap-y-3 px-6">

//           {[
//             "FSSAI Certified",
//             "ISI Certified",
//             "Same-Day Delivery",
//             "Zero Plastic Waste",
//             "Lab Verified Every Batch",
//           ].map((item) => (
//             <span
//               key={item}
//               className="text-[8px] md:text-[9px] uppercase tracking-[0.2em] font-bold text-[#12343b]/45"
//             >
//               {item}
//             </span>
//           ))}

//         </div>
//       </div>

//       {/* =====================================================
//           STORY
//       ===================================================== */}

//       <section
//         id="about"
//         className="relative bg-white py-28 md:py-44"
//       >
//         <div className="max-w-7xl mx-auto px-6 md:px-10">

//           <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-16 lg:gap-28 items-center">

//             <div className="story-image relative h-[500px] md:h-[650px] overflow-hidden rounded-[2rem]">

//               <img
//                 src={images.source}
//                 alt="Natural water source"
//                 className="absolute w-full h-[120%] object-cover"
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-[#12343b]/60 to-transparent" />

//               <div className="absolute left-6 bottom-6 text-white">
//                 <p className="text-[8px] uppercase tracking-[0.3em] opacity-70">
//                   The beginning
//                 </p>

//                 <p className="mt-2 text-2xl font-black">
//                   Every drop has a purpose.
//                 </p>
//               </div>

//             </div>

//             <div>

//               <p className="reveal-up text-[9px] uppercase tracking-[0.35em] text-[#168aa0] font-black mb-7">
//                 Our Story
//               </p>

//               <h2 className="story-word text-[13vw] lg:text-[7vw] font-black leading-[0.78] tracking-[-0.08em] text-[#12343b]">
//                 WHERE
//                 <br />
//                 EVERY DROP
//                 <br />
//                 <span className="text-[#168aa0]">
//                   MATTERS.
//                 </span>
//               </h2>

//               <p className="reveal-up mt-10 max-w-xl text-lg md:text-xl leading-[1.7] text-[#12343b]/65">
//                 We didn't set out to sell water.
//                 We set out to earn your trust, one
//                 delivery at a time.
//               </p>

//               <p className="reveal-up mt-6 max-w-xl text-sm md:text-base leading-[1.8] text-[#12343b]/50">
//                 Jambooneer began with one simple
//                 conviction — that clean, safe,
//                 great-tasting water shouldn't be a
//                 privilege. It should be a promise kept
//                 to every home, office, and celebration
//                 we serve.
//               </p>

//               <div className="reveal-up mt-10 grid sm:grid-cols-3 gap-6">

//                 {[
//                   ["Pure", "At the Source"],
//                   ["Sustainable", "By Design"],
//                   ["Verified", "Every Batch"],
//                 ].map(([title, label]) => (
//                   <div
//                     key={title}
//                     className="border-t border-[#12343b]/15 pt-4"
//                   >
//                     <p className="font-black text-[#12343b]">
//                       {title}
//                     </p>

//                     <p className="mt-1 text-[8px] uppercase tracking-[0.18em] text-[#12343b]/40">
//                       {label}
//                     </p>
//                   </div>
//                 ))}

//               </div>

//             </div>

//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           PRODUCTS
//       ===================================================== */}

//       <section
//         id="products"
//         className="bg-[#dff6fa] py-28 md:py-44"
//       >

//         <div className="max-w-7xl mx-auto px-6 md:px-10">

//           <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">

//             <div>
//               <p className="reveal-up text-[9px] uppercase tracking-[0.35em] text-[#168aa0] font-black mb-6">
//                 What We Offer
//               </p>

//               <h2 className="reveal-up text-[13vw] md:text-[8vw] font-black leading-[0.78] tracking-[-0.08em] text-[#12343b]">
//                 ONE BRAND.
//                 <br />
//                 <span className="text-[#168aa0]">
//                   EVERY THIRST.
//                 </span>
//               </h2>
//             </div>

//             <p className="reveal-up max-w-sm text-sm leading-[1.7] text-[#12343b]/55">
//               From a single bottle to a fleet of
//               tankers — Jambooneer scales to meet
//               you where you are.
//             </p>

//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

//             {products.map((product) => (
//               <article
//                 key={product.number}
//                 className="product-card group bg-white rounded-[1.8rem] overflow-hidden border border-[#12343b]/8 hover:shadow-[0_30px_80px_rgba(18,52,59,0.12)] transition-shadow duration-500"
//               >

//                 <div className="relative h-[330px] overflow-hidden">

//                   <img
//                     src={product.image}
//                     alt={product.title}
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
//                   />

//                   <div className="absolute inset-0 bg-gradient-to-t from-[#12343b]/70 to-transparent" />

//                   <span className="absolute left-5 top-5 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center text-[9px] font-black text-[#168aa0]">
//                     {product.number}
//                   </span>

//                   <h3 className="absolute left-5 right-5 bottom-5 text-2xl md:text-3xl font-black tracking-[-0.04em] text-white">
//                     {product.title}
//                   </h3>

//                 </div>

//                 <div className="p-6">

//                   <p className="text-sm leading-[1.7] text-[#12343b]/55">
//                     {product.text}
//                   </p>

//                   <ul className="mt-6 space-y-3">

//                     {product.items.map((item) => (
//                       <li
//                         key={item}
//                         className="flex items-center gap-3 text-[10px] font-bold text-[#12343b]/65"
//                       >
//                         <span className="w-1.5 h-1.5 rounded-full bg-[#168aa0]" />
//                         {item}
//                       </li>
//                     ))}

//                   </ul>

//                 </div>

//               </article>
//             ))}

//           </div>

//         </div>
//       </section>

//       {/* =====================================================
//           WHY US / QUALITY
//       ===================================================== */}

//       <section
//         id="why-us"
//         className="bg-[#12343b] text-white py-28 md:py-44 relative overflow-hidden"
//       >

//         <div className="absolute right-[-15%] top-[10%] w-[50vw] h-[50vw] rounded-full bg-[#5ed5e8]/10 blur-[120px]" />

//         <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">

//           <div className="max-w-4xl">

//             <p className="reveal-up text-[9px] uppercase tracking-[0.35em] text-[#78d8e8] font-black mb-7">
//               Why Jambooneer
//             </p>

//             <h2 className="reveal-up text-[13vw] md:text-[8vw] font-black leading-[0.78] tracking-[-0.08em]">
//               TRUST,
//               <br />
//               ENGINEERED
//               <br />
//               <span className="text-[#78d8e8]">
//                 INTO EVERY BOTTLE.
//               </span>
//             </h2>

//             <p className="reveal-up max-w-2xl mt-10 text-lg text-white/55 leading-[1.7]">
//               We don't just purify water. We engineer
//               confidence, drop by drop.
//             </p>

//           </div>

//           {/* Certifications */}

//           <div className="mt-20 flex flex-wrap gap-3">

//             {[
//               "FSSAI Certified",
//               "ISI Mark",
//               "ISO 9001:2015",
//               "NABL Tested",
//             ].map((item) => (
//               <span
//                 key={item}
//                 className="px-5 py-3 rounded-full border border-white/15 text-[9px] uppercase tracking-[0.18em] text-white/55"
//               >
//                 {item}
//               </span>
//             ))}

//           </div>

//           {/* Purification */}

//           <div className="mt-28">

//             <div className="flex justify-between items-end">

//               <div>
//                 <p className="text-[9px] uppercase tracking-[0.3em] text-white/30">
//                   The journey
//                 </p>

//                 <h3 className="mt-3 text-3xl md:text-5xl font-black tracking-[-0.05em]">
//                   Seven stages.
//                   <br />
//                   One standard.
//                 </h3>
//               </div>

//               <span className="hidden md:block text-[8px] uppercase tracking-[0.25em] text-white/25">
//                 Source → Bottle
//               </span>

//             </div>

//             <div className="quality-line mt-12 h-px bg-white/15 origin-left" />

//             <div className="quality-grid grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 mt-8 gap-y-8">

//               {purification.map((step, index) => (
//                 <div
//                   key={step}
//                   className="quality-step relative"
//                 >

//                   <div className="w-2.5 h-2.5 rounded-full bg-[#78d8e8] mb-4" />

//                   <span className="text-[8px] uppercase tracking-[0.2em] text-white/30">
//                     0{index + 1}
//                   </span>

//                   <p className="mt-1 font-black text-sm">
//                     {step}
//                   </p>

//                 </div>
//               ))}

//             </div>

//           </div>

//           {/* Why cards */}

//           <div className="mt-28 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">

//             {[
//               [
//                 "01",
//                 "Same-Day Delivery",
//                 "Order before cutoff, receive it the same day. No delays, no excuses.",
//               ],
//               [
//                 "02",
//                 "Transparent Reports",
//                 "Regular lab reports shared openly with subscribers.",
//               ],
//               [
//                 "03",
//                 "Support That Never Sleeps",
//                 "WhatsApp, call, or email — we're always one message away.",
//               ],
//               [
//                 "04",
//                 "Beyond The Bottle",
//                 "Our reusable jar system keeps thousands of plastic bottles out of landfills.",
//               ],
//             ].map(([number, title, text]) => (
//               <div
//                 key={number}
//                 className="reveal-up p-7 md:p-9 bg-[#12343b]"
//               >

//                 <span className="text-[9px] text-[#78d8e8] font-black">
//                   {number}
//                 </span>

//                 <h3 className="mt-12 text-xl font-black">
//                   {title}
//                 </h3>

//                 <p className="mt-4 text-sm leading-[1.7] text-white/40">
//                   {text}
//                 </p>

//               </div>
//             ))}

//           </div>

//           {/* BIG NUMBERS */}

//           <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 border-y border-white/10">

//             {[
//               ["10,000+", "Happy Customers"],
//               ["50,000+", "Bottles Delivered Daily"],
//               ["99.9%", "Purity Rate"],
//               ["7+", "Years Of Trust"],
//             ].map(([value, label]) => (
//               <div
//                 key={label}
//                 className="big-stat py-10 md:py-14 border-r border-white/10 last:border-r-0"
//               >

//                 <p className="text-4xl md:text-6xl font-black tracking-[-0.06em] text-[#78d8e8]">
//                   {value}
//                 </p>

//                 <p className="mt-3 text-[8px] uppercase tracking-[0.2em] text-white/30">
//                   {label}
//                 </p>

//               </div>
//             ))}

//           </div>

//         </div>
//       </section>

//       {/* =====================================================
//           PROCESS
//       ===================================================== */}

//       <section
//         id="process"
//         className="bg-white py-28 md:py-44"
//       >

//         <div className="max-w-7xl mx-auto px-6 md:px-10">

//           <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 items-center">

//             <div>

//               <p className="reveal-up text-[9px] uppercase tracking-[0.35em] text-[#168aa0] font-black">
//                 How It Works
//               </p>

//               <h2 className="reveal-up mt-7 text-[13vw] md:text-[8vw] font-black leading-[0.78] tracking-[-0.08em]">
//                 PURE WATER.
//                 <br />
//                 <span className="text-[#168aa0]">
//                   FOUR STEPS.
//                 </span>
//               </h2>

//               <p className="reveal-up mt-8 max-w-lg text-sm md:text-lg text-[#12343b]/55 leading-[1.7]">
//                 Simple for you. Precise behind the scenes.
//               </p>

//               <div className="mt-12 space-y-8">

//                 {[
//                   [
//                     "01",
//                     "Place Your Order",
//                     "Order via WhatsApp, our website, or a quick call — pick your product and delivery slot.",
//                   ],
//                   [
//                     "02",
//                     "Order Confirmed",
//                     "Instant confirmation with your order ID and delivery window.",
//                   ],
//                   [
//                     "03",
//                     "We Deliver",
//                     "Fresh, sealed, and quality-tagged — brought to you by our trained team.",
//                   ],
//                   [
//                     "04",
//                     "Enjoy Pure Water",
//                     "Hydrate with confidence. Tell us how we did — we're always improving.",
//                   ],
//                 ].map(([number, title, text]) => (
//                   <div
//                     key={number}
//                     className="reveal-up flex gap-5 border-t border-[#12343b]/10 pt-6"
//                   >

//                     <span className="text-[9px] font-black text-[#168aa0]">
//                       {number}
//                     </span>

//                     <div>
//                       <h3 className="text-xl font-black">
//                         {title}
//                       </h3>

//                       <p className="mt-2 text-sm text-[#12343b]/50 leading-[1.7]">
//                         {text}
//                       </p>
//                     </div>

//                   </div>
//                 ))}

//               </div>

//             </div>

//             <div className="process-visual relative h-[600px] md:h-[750px] rounded-[2rem] overflow-hidden">

//               <img
//                 src={images.delivery}
//                 alt="Jambooneer delivery"
//                 className="w-full h-full object-cover"
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-[#12343b]/80 via-transparent to-transparent" />

//               <div className="absolute bottom-7 left-7 right-7 text-white">

//                 <p className="text-[8px] uppercase tracking-[0.3em] text-white/50">
//                   Delivered with care
//                 </p>

//                 <p className="mt-3 text-3xl md:text-5xl font-black tracking-[-0.05em]">
//                   Fresh.
//                   <br />
//                   Sealed.
//                   <br />
//                   At your door.
//                 </p>

//               </div>

//             </div>

//           </div>

//         </div>
//       </section>

//       {/* =====================================================
//           TESTIMONIALS
//       ===================================================== */}

//       <section className="bg-[#eef9fb] py-28 md:py-40">

//         <div className="max-w-7xl mx-auto px-6 md:px-10">

//           <div className="text-center">

//             <p className="reveal-up text-[9px] uppercase tracking-[0.35em] text-[#168aa0] font-black">
//               Customer Voices
//             </p>

//             <h2 className="reveal-up mt-7 text-[12vw] md:text-[7vw] font-black leading-[0.8] tracking-[-0.08em] text-[#12343b]">
//               LOVED BY
//               <br />
//               <span className="text-[#168aa0]">
//                 PEOPLE.
//               </span>
//             </h2>

//           </div>

//           <div className="testimonial-grid grid md:grid-cols-3 gap-5 mt-20">

//             {testimonials.map((item) => (
//               <article
//                 key={item.name}
//                 className="testimonial-card bg-white rounded-[1.5rem] p-7 md:p-9"
//               >

//                 <div className="text-[#168aa0] text-xl tracking-widest">
//                   ★★★★★
//                 </div>

//                 <p className="mt-10 text-lg md:text-xl leading-[1.6] font-medium text-[#12343b]/70">
//                   “{item.quote}”
//                 </p>

//                 <div className="mt-10 pt-6 border-t border-[#12343b]/10">

//                   <p className="font-black text-[#12343b]">
//                     {item.name}
//                   </p>

//                   <p className="mt-1 text-[8px] uppercase tracking-[0.2em] text-[#12343b]/35">
//                     {item.role}
//                   </p>

//                 </div>

//               </article>
//             ))}

//           </div>

//         </div>
//       </section>

//       {/* =====================================================
//           CONTACT
//       ===================================================== */}

//       <section
//         id="contact"
//         className="bg-[#12343b] text-white py-28 md:py-44"
//       >

//         <div className="max-w-7xl mx-auto px-6 md:px-10">

//           <div className="grid lg:grid-cols-[1fr_0.8fr] gap-16 items-start">

//             <div>

//               <p className="reveal-up text-[9px] uppercase tracking-[0.35em] text-[#78d8e8] font-black">
//                 Get In Touch
//               </p>

//               <h2 className="reveal-up mt-7 text-[13vw] md:text-[8vw] font-black leading-[0.78] tracking-[-0.08em]">
//                 LET'S START
//                 <br />
//                 YOUR
//                 <br />
//                 <span className="text-[#78d8e8]">
//                   PURE JOURNEY.
//                 </span>
//               </h2>

//               <p className="reveal-up max-w-xl mt-9 text-lg text-white/45 leading-[1.7]">
//                 Home, office, or a grand occasion —
//                 we're ready. Reach out and we'll
//                 respond within the hour.
//               </p>

//               <div className="reveal-up mt-12 grid sm:grid-cols-2 gap-8">

//                 <div>
//                   <p className="text-[8px] uppercase tracking-[0.25em] text-white/25">
//                     Location
//                   </p>

//                   <p className="mt-2 text-sm">
//                     Full Address Here
//                   </p>
//                 </div>

//                 <div>
//                   <p className="text-[8px] uppercase tracking-[0.25em] text-white/25">
//                     Phone
//                   </p>

//                   <p className="mt-2 text-sm">
//                     [Phone Number]
//                   </p>
//                 </div>

//                 <div>
//                   <p className="text-[8px] uppercase tracking-[0.25em] text-white/25">
//                     Email
//                   </p>

//                   <p className="mt-2 text-sm">
//                     hello@jambooneer.com
//                   </p>
//                 </div>

//                 <div>
//                   <p className="text-[8px] uppercase tracking-[0.25em] text-white/25">
//                     Office Hours
//                   </p>

//                   <p className="mt-2 text-sm">
//                     [Timing] · 7 Days A Week
//                   </p>
//                 </div>

//               </div>

//             </div>

//             {/* FORM */}

//             <div className="contact-panel bg-white text-[#12343b] rounded-[2rem] p-7 md:p-10">

//               <p className="text-[9px] uppercase tracking-[0.3em] text-[#168aa0] font-black">
//                 Request A Dealership
//               </p>

//               <h3 className="mt-5 text-3xl md:text-4xl font-black tracking-[-0.05em]">
//                 Let's build something
//                 <br />
//                 reliable together.
//               </h3>

//               <form className="mt-10 space-y-5">

//                 <input
//                   type="text"
//                   placeholder="Full Name"
//                   className="w-full border-b border-[#12343b]/15 py-4 outline-none text-sm placeholder:text-[#12343b]/30 focus:border-[#168aa0]"
//                 />

//                 <input
//                   type="tel"
//                   placeholder="Phone Number"
//                   className="w-full border-b border-[#12343b]/15 py-4 outline-none text-sm placeholder:text-[#12343b]/30 focus:border-[#168aa0]"
//                 />

//                 <input
//                   type="email"
//                   placeholder="Email Address"
//                   className="w-full border-b border-[#12343b]/15 py-4 outline-none text-sm placeholder:text-[#12343b]/30 focus:border-[#168aa0]"
//                 />

//                 <textarea
//                   rows="4"
//                   placeholder="Tell us what you need..."
//                   className="w-full border-b border-[#12343b]/15 py-4 outline-none text-sm resize-none placeholder:text-[#12343b]/30 focus:border-[#168aa0]"
//                 />

//                 <button
//                   type="button"
//                   className="magnetic w-full mt-4 bg-[#12343b] text-white py-5 rounded-full text-[9px] uppercase tracking-[0.25em] font-black"
//                 >
//                   Send Message →
//                 </button>

//               </form>

//             </div>

//           </div>

//         </div>
//       </section>

//       {/* =====================================================
//           FOOTER
//       ===================================================== */}

//       <footer className="bg-[#0c292f] text-white">

//         <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">

//           <div className="grid md:grid-cols-[1.5fr_1fr_1fr] gap-12">

//             <div>

//               <div className="flex items-center gap-3">

//                 <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center">
//                   <span className="text-[8px] font-black text-[#12343b]">
//                     JAM
//                   </span>
//                 </div>

//                 <span className="font-black text-xl tracking-[-0.04em]">
//                   JAMBOONEER
//                 </span>

//               </div>

//               <p className="mt-7 max-w-sm text-sm leading-[1.7] text-white/35">
//                 Pure water delivered with care,
//                 straight to your doorstep.
//               </p>

//             </div>

//             <div>

//               <p className="text-[8px] uppercase tracking-[0.25em] text-white/25">
//                 Products
//               </p>

//               <div className="mt-5 space-y-3">

//                 {[
//                   "Packaged Water",
//                   "Dealership",
//                   "Bulk Supply",
//                   "Mineral Water",
//                   "Office Solutions",
//                   "Event Packages",
//                 ].map((item) => (
//                   <p
//                     key={item}
//                     className="text-sm text-white/55 hover:text-white transition-colors cursor-pointer"
//                   >
//                     {item}
//                   </p>
//                 ))}

//               </div>

//             </div>

//             <div>

//               <p className="text-[8px] uppercase tracking-[0.25em] text-white/25">
//                 Company
//               </p>

//               <div className="mt-5 space-y-3">

//                 {[
//                   "About Us",
//                   "Why Choose Us",
//                   "How It Works",
//                   "Testimonials",
//                   "Contact",
//                   "Careers",
//                 ].map((item) => (
//                   <p
//                     key={item}
//                     className="text-sm text-white/55 hover:text-white transition-colors cursor-pointer"
//                   >
//                     {item}
//                   </p>
//                 ))}

//               </div>

//             </div>

//           </div>

//           <div className="mt-16 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4">

//             <p className="text-[8px] uppercase tracking-[0.2em] text-white/25">
//               © 2026 Jambooneer. All rights reserved.
//             </p>

//             <p className="text-[8px] uppercase tracking-[0.2em] text-white/25">
//               Pure water. Honest delivery.
//             </p>

//           </div>

//         </div>

//       </footer>
//     </main>
//   );
// }

// export default App;























































































































































// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// import {
//   FiArrowUpRight,
//   FiCheck,
//   FiChevronDown,
//   FiDroplet,
//   FiMail,
//   FiMapPin,
//   FiMenu,
//   FiPhone,
//   FiSend,
//   FiX,
// } from "react-icons/fi";

// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// /* =========================================================
//    IMAGES
// ========================================================= */

// const IMAGES = {
//   hero: "https://images.unsplash.com/photo-1564419320461-6870880221ad?auto=format&fit=crop&w=1600&q=85",
//   water: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=1200&q=85",
//   source: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=85",
//   bottle: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=85",
//   delivery: "https://images.unsplash.com/photo-1617191880520-4f2a8e8b7c5a?auto=format&fit=crop&w=1200&q=85",
//   office: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
//   event: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1200&q=85",
// };

// /* =========================================================
//    DATA
// ========================================================= */

// const products = [
//   {
//     number: "01",
//     title: "Packaged Drinking Water",
//     text: "Crisp, refreshing water for daily life, on the move or at home.",
//     image: IMAGES.bottle,
//     items: [
//       "BPA-free, food-grade plastic",
//       "Tamper-evident sealed caps",
//       "Bulk packs available",
//       "Chilled delivery option",
//     ],
//   },
//   {
//     number: "02",
//     title: "Dealer Partnership",
//     text: "Build a business on a brand people already trust.",
//     image: IMAGES.delivery,
//     items: [
//       "Exclusive, area-based dealership",
//       "Attractive profit margins",
//       "Marketing & promotional support",
//       "Reliable supply, fast assistance",
//     ],
//   },
//   {
//     number: "03",
//     title: "Bulk Water Supply",
//     text: "Dependable tanker delivery for sites and businesses that cannot afford downtime.",
//     image: IMAGES.water,
//     items: [
//       "Flexible volumes per delivery",
//       "Custom contracts available",
//       "Temperature-controlled transport",
//       "24/7 priority support",
//     ],
//   },
//   {
//     number: "04",
//     title: "Mineral-Enriched Water",
//     text: "Thoughtfully balanced for everyday wellness.",
//     image: IMAGES.source,
//     items: [
//       "pH balanced",
//       "Enhanced electrolytes",
//       "Doctor recommended",
//       "Ideal for infants & seniors",
//     ],
//   },
//   {
//     number: "05",
//     title: "Office Water Solutions",
//     text: "Hydration, handled — so your team does not have to think about it.",
//     image: IMAGES.office,
//     items: [
//       "Dedicated account manager",
//       "GST-compliant invoicing",
//       "Dispenser maintenance",
//       "Flexible monthly plans",
//     ],
//   },
//   {
//     number: "06",
//     title: "Event Water Packages",
//     text: "Because every celebration deserves water as polished as the occasion.",
//     image: IMAGES.event,
//     items: [
//       "Branded bottle labelling",
//       "On-site delivery & setup",
//       "Bulk quantity discounts",
//       "Last-minute availability",
//     ],
//   },
// ];

// const processSteps = [
//   {
//     number: "01",
//     title: "Place Your Order",
//     text: "Order via WhatsApp, our website, or a quick call — pick your product and delivery slot.",
//   },
//   {
//     number: "02",
//     title: "Order Confirmed",
//     text: "Instant confirmation with your order ID and delivery window.",
//   },
//   {
//     number: "03",
//     title: "We Deliver",
//     text: "Fresh, sealed, and quality-tagged — brought to you by our trained team.",
//   },
//   {
//     number: "04",
//     title: "Enjoy Pure Water",
//     text: "Hydrate with confidence. Tell us how we did — we're always improving.",
//   },
// ];

// const testimonials = [
//   {
//     quote: "Jambooneer has made our office water supply completely effortless. The quality stays consistent and deliveries are reliable.",
//     name: "Rahul Sharma",
//     role: "Operations Manager",
//   },
//   {
//     quote: "The mineral water tastes genuinely fresh. We now use Jambooneer for our home and family gatherings.",
//     name: "Priya Verma",
//     role: "Customer",
//   },
//   {
//     quote: "For our wedding, the bulk delivery and branded bottles arrived exactly when promised. Excellent coordination.",
//     name: "Amit Jain",
//     role: "Event Organizer",
//   },
// ];

// /* =========================================================
//    APP
// ========================================================= */

// export default function App() {
//   const main = useRef(null);
//   const hero = useRef(null);
//   const bottle = useRef(null);
//   const bottleWrap = useRef(null);
//   const cursor = useRef(null);
//   const cursorDot = useRef(null);
//   const nav = useRef(null);

//   const [menuOpen, setMenuOpen] = useState(false);
//   const [activeProduct, setActiveProduct] = useState(0);

//   const scrollTo = (id) => {
//     setMenuOpen(false);
//     const element = document.getElementById(id);
    
//     if (element) {
//       gsap.to(window, {
//         duration: 1.2,
//         scrollTo: {
//           y: element,
//           offsetY: 80,
//         },
//         ease: "power3.inOut",
//       });
//     }
//   };

//   useEffect(() => {
//     const ctx = gsap.context(() => {
      
//       gsap.set(
//         [
//           ".hero-eyebrow",
//           ".hero-line",
//           ".hero-copy",
//           ".hero-stats",
//           ".hero-proof",
//           ".hero-cta",
//         ],
//         {
//           opacity: 0,
//           y: 50,
//         }
//       );

//       gsap.set(".hero-bottle", {
//         opacity: 0,
//         scale: 0.7,
//         y: 100,
//         rotate: -8,
//       });

//       const heroIntro = gsap.timeline({
//         defaults: {
//           ease: "power4.out",
//         },
//       });

//       heroIntro
//         .to(".hero-eyebrow", {
//           opacity: 1,
//           y: 0,
//           duration: 0.9,
//         })
//         .to(
//           ".hero-line",
//           {
//             opacity: 1,
//             y: 0,
//             duration: 1.15,
//             stagger: 0.12,
//           },
//           "-=0.55"
//         )
//         .to(
//           ".hero-copy",
//           {
//             opacity: 1,
//             y: 0,
//             duration: 0.9,
//           },
//           "-=0.65"
//         )
//         .to(
//           ".hero-stats",
//           {
//             opacity: 1,
//             y: 0,
//             duration: 0.8,
//           },
//           "-=0.55"
//         )
//         .to(
//           ".hero-proof",
//           {
//             opacity: 1,
//             y: 0,
//             duration: 0.7,
//           },
//           "-=0.5"
//         )
//         .to(
//           ".hero-cta",
//           {
//             opacity: 1,
//             y: 0,
//             duration: 0.7,
//           },
//           "-=0.45"
//         )
//         .to(
//           ".hero-bottle",
//           {
//             opacity: 1,
//             scale: 1,
//             y: 0,
//             rotate: 0,
//             duration: 1.4,
//             ease: "expo.out",
//           },
//           "-=1.2"
//         );

//       gsap.to(bottle.current, {
//         y: -14,
//         rotation: 2,
//         duration: 2.8,
//         repeat: -1,
//         yoyo: true,
//         ease: "sine.inOut",
//       });

//       const heroElement = hero.current;

//       const moveBottle = (e) => {
//         if (!heroElement || !bottle.current) return;

//         const rect = heroElement.getBoundingClientRect();
//         const x = (e.clientX - rect.left) / rect.width - 0.5;
//         const y = (e.clientY - rect.top) / rect.height - 0.5;

//         gsap.to(bottle.current, {
//           x: x * 24,
//           rotationY: x * 8,
//           rotationX: -y * 6,
//           duration: 0.8,
//           ease: "power3.out",
//           overwrite: "auto",
//         });
//       };

//       if (heroElement) {
//         heroElement.addEventListener("mousemove", moveBottle);
//       }

//       const heroScroll = gsap.timeline({
//         scrollTrigger: {
//           trigger: hero.current,
//           start: "top top",
//           end: "bottom top",
//           scrub: 1.2,
//         },
//       });

//       heroScroll
//         .to(
//           ".hero-copy-area",
//           {
//             y: -180,
//             opacity: 0.15,
//             ease: "none",
//           },
//           0
//         )
//         .to(
//           ".hero-glow-one",
//           {
//             x: -150,
//             y: 100,
//             scale: 1.5,
//             ease: "none",
//           },
//           0
//         )
//         .to(
//           ".hero-glow-two",
//           {
//             x: 180,
//             y: -120,
//             scale: 1.6,
//             ease: "none",
//           },
//           0
//         )
//         .to(
//           bottleWrap.current,
//           {
//             x: 360,
//             y: 500,
//             scale: 0.42,
//             rotation: 32,
//             ease: "none",
//           },
//           0
//         )
//         .to(
//           ".hero-wave",
//           {
//             y: -180,
//             scale: 1.15,
//             ease: "none",
//           },
//           0
//         );

//       ScrollTrigger.create({
//         start: 100,
//         end: 99999,
//         onEnter: () => {
//           gsap.to(nav.current, {
//             y: 8,
//             scale: 0.97,
//             duration: 0.4,
//             ease: "power3.out",
//           });
//         },
//         onLeaveBack: () => {
//           gsap.to(nav.current, {
//             y: 0,
//             scale: 1,
//             duration: 0.4,
//             ease: "power3.out",
//           });
//         },
//       });

//       gsap.utils.toArray(".reveal").forEach((element) => {
//         gsap.fromTo(
//           element,
//           {
//             opacity: 0,
//             y: 80,
//           },
//           {
//             opacity: 1,
//             y: 0,
//             duration: 1.1,
//             ease: "power4.out",
//             scrollTrigger: {
//               trigger: element,
//               start: "top 86%",
//               toggleActions: "play none none reverse",
//             },
//           }
//         );
//       });

//       gsap.utils.toArray(".section-title-line").forEach((line) => {
//         gsap.fromTo(
//           line,
//           {
//             yPercent: 110,
//           },
//           {
//             yPercent: 0,
//             duration: 1.2,
//             ease: "power4.out",
//             scrollTrigger: {
//               trigger: line,
//               start: "top 88%",
//               toggleActions: "play none none reverse",
//             },
//           }
//         );
//       });

//       gsap.utils.toArray(".story-image").forEach((image) => {
//         gsap.to(image, {
//           yPercent: -12,
//           ease: "none",
//           scrollTrigger: {
//             trigger: image,
//             start: "top bottom",
//             end: "bottom top",
//             scrub: true,
//           },
//         });
//       });

//       gsap.fromTo(
//         ".product-card",
//         {
//           opacity: 0,
//           y: 100,
//           rotateX: 8,
//         },
//         {
//           opacity: 1,
//           y: 0,
//           rotateX: 0,
//           duration: 1,
//           stagger: 0.1,
//           ease: "power4.out",
//           scrollTrigger: {
//             trigger: ".products-grid",
//             start: "top 78%",
//           },
//         }
//       );

//       gsap.fromTo(
//         ".quality-line-progress",
//         {
//           scaleY: 0,
//         },
//         {
//           scaleY: 1,
//           transformOrigin: "top",
//           ease: "none",
//           scrollTrigger: {
//             trigger: ".quality-process",
//             start: "top 70%",
//             end: "bottom 65%",
//             scrub: 1,
//           },
//         }
//       );

//       gsap.utils.toArray(".quality-item").forEach((item) => {
//         gsap.fromTo(
//           item,
//           {
//             opacity: 0.25,
//             x: 30,
//           },
//           {
//             opacity: 1,
//             x: 0,
//             duration: 0.7,
//             ease: "power3.out",
//             scrollTrigger: {
//               trigger: item,
//               start: "top 72%",
//               end: "top 42%",
//               scrub: true,
//             },
//           }
//         );
//       });

//       gsap.utils.toArray(".counter").forEach((counter) => {
//         const target = Number(counter.dataset.value);
        
//         if (isNaN(target)) return;

//         const obj = { value: 0 };

//         gsap.to(obj, {
//           value: target,
//           duration: 2,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: counter,
//             start: "top 85%",
//             once: true,
//           },
//           onUpdate: () => {
//             const currentValue = Math.floor(obj.value);
//             counter.innerText = currentValue.toLocaleString("en-IN") + "+";
//           },
//         });
//       });

//       gsap.fromTo(
//         ".process-progress",
//         {
//           scaleX: 0,
//         },
//         {
//           scaleX: 1,
//           transformOrigin: "left",
//           ease: "none",
//           scrollTrigger: {
//             trigger: ".process-section",
//             start: "top 70%",
//             end: "bottom 65%",
//             scrub: 1,
//           },
//         }
//       );

//       gsap.utils.toArray(".process-card").forEach((card, index) => {
//         gsap.fromTo(
//           card,
//           {
//             opacity: 0,
//             y: 80,
//           },
//           {
//             opacity: 1,
//             y: 0,
//             duration: 0.9,
//             delay: index * 0.1,
//             ease: "power4.out",
//             scrollTrigger: {
//               trigger: card,
//               start: "top 82%",
//             },
//           }
//         );
//       });

//       gsap.to(".testimonial-track", {
//         xPercent: -10,
//         ease: "none",
//         scrollTrigger: {
//           trigger: ".testimonials-section",
//           start: "top bottom",
//           end: "bottom top",
//           scrub: 1,
//         },
//       });

//       const contactTimeline = gsap.timeline({
//         scrollTrigger: {
//           trigger: ".contact-section",
//           start: "top 75%",
//         },
//       });

//       contactTimeline
//         .fromTo(
//           ".contact-kicker",
//           {
//             opacity: 0,
//             y: 40,
//           },
//           {
//             opacity: 1,
//             y: 0,
//             duration: 0.7,
//           }
//         )
//         .fromTo(
//           ".contact-heading",
//           {
//             opacity: 0,
//             y: 80,
//           },
//           {
//             opacity: 1,
//             y: 0,
//             duration: 1,
//             ease: "power4.out",
//           },
//           "-=0.35"
//         )
//         .fromTo(
//           ".contact-info",
//           {
//             opacity: 0,
//             x: -50,
//           },
//           {
//             opacity: 1,
//             x: 0,
//             duration: 0.9,
//           },
//           "-=0.4"
//         )
//         .fromTo(
//           ".contact-form",
//           {
//             opacity: 0,
//             y: 100,
//             rotateX: 8,
//           },
//           {
//             opacity: 1,
//             y: 0,
//             rotateX: 0,
//             duration: 1.1,
//             ease: "power4.out",
//           },
//           "-=0.65"
//         );

//       gsap.fromTo(
//         ".footer-reveal",
//         {
//           opacity: 0,
//           y: 40,
//         },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 0.9,
//           stagger: 0.08,
//           scrollTrigger: {
//             trigger: ".footer",
//             start: "top 85%",
//           },
//         }
//       );

//       const onMouseMove = (e) => {
//         if (cursor.current && cursorDot.current) {
//           gsap.to(cursor.current, {
//             x: e.clientX,
//             y: e.clientY,
//             duration: 0.35,
//             ease: "power3.out",
//           });

//           gsap.to(cursorDot.current, {
//             x: e.clientX,
//             y: e.clientY,
//             duration: 0.08,
//           });
//         }
//       };

//       window.addEventListener("mousemove", onMouseMove);

//       gsap.utils.toArray(".magnetic").forEach((button) => {
//         const move = (e) => {
//           const rect = button.getBoundingClientRect();
//           const x = e.clientX - (rect.left + rect.width / 2);
//           const y = e.clientY - (rect.top + rect.height / 2);

//           gsap.to(button, {
//             x: x * 0.22,
//             y: y * 0.22,
//             duration: 0.35,
//             ease: "power3.out",
//           });
//         };

//         const leave = () => {
//           gsap.to(button, {
//             x: 0,
//             y: 0,
//             duration: 0.6,
//             ease: "elastic.out(1, 0.4)",
//           });
//         };

//         button.addEventListener("mousemove", move);
//         button.addEventListener("mouseleave", leave);
//       });

//       return () => {
//         if (heroElement) {
//           heroElement.removeEventListener("mousemove", moveBottle);
//         }
//         window.removeEventListener("mousemove", onMouseMove);
//       };
      
//     }, main);

//     return () => ctx.revert();
//   }, []);

//   useEffect(() => {
//     if (!menuOpen) return;

//     const ctx = gsap.context(() => {
//       gsap.fromTo(
//         ".mobile-menu",
//         {
//           clipPath: "inset(0 0 100% 0)",
//         },
//         {
//           clipPath: "inset(0 0 0% 0)",
//           duration: 0.7,
//           ease: "power4.inOut",
//         }
//       );

//       gsap.fromTo(
//         ".mobile-link",
//         {
//           opacity: 0,
//           y: 40,
//         },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 0.7,
//           stagger: 0.08,
//           delay: 0.15,
//           ease: "power4.out",
//         }
//       );
//     });

//     return () => ctx.revert();
//   }, [menuOpen]);

//   return (
//     <main
//       ref={main}
//       className="relative overflow-hidden bg-[#f7fcfd] text-[#063b4a]"
//     >
//       {/* CUSTOM CURSOR */}
//       <div
//         ref={cursor}
//         className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#48c4d5]/60 mix-blend-difference md:block"
//       />

//       <div
//         ref={cursorDot}
//         className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#48c4d5] md:block"
//       />

//       {/* NAVBAR */}
//       <nav
//         ref={nav}
//         className="fixed left-0 right-0 top-0 z-[100] px-4 pt-4 md:px-8"
//       >
//         <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/60 bg-white/85 px-4 py-3 shadow-[0_15px_60px_rgba(6,59,74,0.08)] backdrop-blur-xl md:px-6">
//           <a
//             href="#home"
//             className="group flex items-center gap-3"
//             onClick={(e) => {
//               e.preventDefault();
//               scrollTo("home");
//             }}
//           >
//             <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-white shadow-[0_6px_25px_rgba(6,59,74,0.12)]">
//               <span className="text-xl font-black tracking-[-0.12em] text-[#063b4a]">
//                 J
//               </span>
//               <span className="absolute bottom-1 h-1.5 w-4 rounded-full bg-[#48c4d5]" />
//             </div>

//             <div className="hidden sm:block">
//               <div className="text-sm font-black tracking-[0.18em] text-[#063b4a]">
//                 JAMBOONEER
//               </div>
//               <div className="text-[8px] font-semibold uppercase tracking-[0.3em] text-[#48aebc]">
//                 Pure Water
//               </div>
//             </div>
//           </a>

//           <div className="hidden items-center gap-8 lg:flex">
//             {[
//               ["About", "about"],
//               ["Products", "products"],
//               ["Why Us", "why-us"],
//               ["Process", "process"],
//               ["Contact", "contact"],
//             ].map(([label, id]) => (
//               <button
//                 key={id}
//                 onClick={() => scrollTo(id)}
//                 className="nav-link relative text-[10px] font-bold uppercase tracking-[0.2em] text-[#174e5c] transition-colors hover:text-[#25a9bb]"
//               >
//                 {label}
//               </button>
//             ))}
//           </div>

//           <button
//             onClick={() => scrollTo("contact")}
//             className="magnetic hidden rounded-full bg-[#063b4a] px-6 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-white shadow-[0_10px_30px_rgba(6,59,74,0.2)] transition-all hover:bg-[#087f95] lg:block"
//           >
//             Order Now
//           </button>

//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="flex h-11 w-11 items-center justify-center rounded-full bg-[#063b4a] text-white lg:hidden"
//           >
//             {menuOpen ? <FiX /> : <FiMenu />}
//           </button>
//         </div>
//       </nav>

//       {/* MOBILE MENU */}
//       {menuOpen && (
//         <div className="mobile-menu fixed inset-0 z-[90] flex flex-col justify-end bg-[#063b4a] px-7 pb-10 pt-32 text-white">
//           <div className="flex flex-col">
//             {[
//               ["About", "about"],
//               ["Products", "products"],
//               ["Why Us", "why-us"],
//               ["Process", "process"],
//               ["Contact", "contact"],
//             ].map(([label, id]) => (
//               <button
//                 key={id}
//                 onClick={() => scrollTo(id)}
//                 className="mobile-link border-b border-white/10 py-5 text-left text-4xl font-light"
//               >
//                 {label}
//               </button>
//             ))}
//           </div>

//           <div className="mt-8 text-xs uppercase tracking-[0.3em] text-white/40">
//             Pure water. Honest delivery.
//           </div>
//         </div>
//       )}

//       {/* HERO */}
//       <section
//         ref={hero}
//         id="home"
//         className="hero relative flex min-h-[900px] items-center overflow-hidden bg-[#dff6f8] pt-28"
//       >
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(72,196,213,0.22),transparent_30%),radial-gradient(circle_at_85%_75%,rgba(8,127,149,0.13),transparent_30%)]" />

//         <div className="hero-glow-one absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#8ce1e9]/40 blur-[120px]" />

//         <div className="hero-glow-two absolute -right-40 bottom-0 h-[550px] w-[550px] rounded-full bg-[#48c4d5]/20 blur-[140px]" />

//         <div className="absolute bottom-0 left-0 right-0 h-64 overflow-hidden opacity-40">
//           <div className="hero-wave absolute -bottom-24 left-1/2 h-80 w-[130%] -translate-x-1/2 rounded-[50%] bg-white/60 blur-sm" />
//         </div>

//         <div className="hero-copy-area relative z-20 mx-auto grid w-full max-w-7xl items-center gap-12 px-6 pb-28 md:px-10 lg:grid-cols-[1fr_0.65fr]">
//           <div>
//             <div className="hero-eyebrow mb-7 flex items-center gap-3">
//               <span className="h-px w-10 bg-[#25a9bb]" />
//               <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#087f95]">
//                 Pure Water • Honest Delivery
//               </span>
//             </div>

//             <h1 className="max-w-5xl overflow-hidden text-[17vw] font-black leading-[0.78] tracking-[-0.08em] text-[#063b4a] sm:text-[13vw] md:text-[9vw] lg:text-[7.7vw]">
//               <span className="hero-line block">Purity Poured</span>
//               <span className="hero-line block">
//                 <span className="bg-gradient-to-r from-[#087f95] via-[#35b9ca] to-[#8ce1e9] bg-clip-text text-transparent">
//                   With Purpose.
//                 </span>
//               </span>
//             </h1>

//             <p className="hero-copy mt-9 max-w-xl text-sm leading-7 text-[#315d68] md:text-base">
//               Jambooneer brings rigorously purified, mineral-balanced water
//               straight to your home, office, or event — clean water, honest
//               delivery, every single time.
//             </p>

//             <div className="hero-cta mt-8 flex flex-wrap items-center gap-4">
//               <button
//                 onClick={() => scrollTo("products")}
//                 className="magnetic group flex items-center gap-3 rounded-full bg-[#063b4a] px-7 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-white"
//               >
//                 Explore Water
//                 <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-transform group-hover:rotate-45">
//                   <FiArrowUpRight />
//                 </span>
//               </button>

//               <button
//                 onClick={() => scrollTo("about")}
//                 className="flex items-center gap-2 px-3 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#087f95]"
//               >
//                 Our Story
//                 <FiChevronDown />
//               </button>
//             </div>

//             <div className="hero-stats mt-14 grid max-w-2xl grid-cols-2 border-y border-[#063b4a]/10 py-5 sm:grid-cols-4">
//               {[
//                 ["10000", "Happy Customers"],
//                 ["99", "Purity Tested"],
//                 ["24", "Delivery Support"],
//                 ["7", "Stage Purification"],
//               ].map(([value, label]) => (
//                 <div
//                   key={label}
//                   className="border-r border-[#063b4a]/10 px-4 first:pl-0 last:border-0"
//                 >
//                   <div className="flex items-end gap-0.5 text-2xl font-black tracking-tight text-[#063b4a]">
//                     <span className="counter" data-value={value}>
//                       0+
//                     </span>
//                   </div>
//                   <div className="mt-1 text-[8px] font-bold uppercase tracking-[0.15em] text-[#57909a]">
//                     {label}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="hero-proof mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[8px] font-bold uppercase tracking-[0.18em] text-[#43828d]">
//               <span>FSSAI Certified</span>
//               <span>•</span>
//               <span>ISI Certified</span>
//               <span>•</span>
//               <span>Same-Day Delivery</span>
//               <span>•</span>
//               <span>Lab Verified</span>
//             </div>
//           </div>

//           <div
//             ref={bottleWrap}
//             className="pointer-events-none relative flex min-h-[500px] items-center justify-center"
//           >
//             <div className="absolute h-[360px] w-[360px] rounded-full border border-white/80 bg-white/30 shadow-[0_0_100px_rgba(72,196,213,0.25)] backdrop-blur-sm md:h-[480px] md:w-[480px]" />
//             <div className="absolute h-[280px] w-[280px] rounded-full border border-white/70 md:h-[380px] md:w-[380px]" />
//             <div className="absolute bottom-20 h-16 w-64 rounded-full bg-[#087f95]/20 blur-[35px]" />

//             <div
//               ref={bottle}
//               className="hero-bottle relative z-10 w-[170px] transform-gpu sm:w-[200px] md:w-[235px] lg:w-[260px]"
//               style={{ transformStyle: "preserve-3d" }}
//             >
//               <img
//                 src={IMAGES.bottle}
//                 alt="Jambooneer water bottle"
//                 className="h-auto w-full rounded-[30px] object-cover shadow-[0_45px_80px_rgba(6,59,74,0.25)]"
//               />

//               <div className="absolute -right-10 top-20 hidden rounded-full border border-white/70 bg-white/70 px-4 py-2 text-[8px] font-bold uppercase tracking-[0.2em] text-[#087f95] shadow-xl backdrop-blur-md sm:block">
//                 Lab Verified
//               </div>

//               <div className="absolute -left-10 bottom-24 hidden rounded-full border border-white/70 bg-white/70 px-4 py-2 text-[8px] font-bold uppercase tracking-[0.2em] text-[#087f95] shadow-xl backdrop-blur-md sm:block">
//                 Pure Source
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-3">
//           <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-[#43828d]">
//             Explore the journey
//           </span>
//           <span className="h-12 w-px bg-gradient-to-b from-[#25a9bb] to-transparent" />
//         </div>
//       </section>

//       {/* STORY */}
//       <section
//         id="about"
//         className="relative overflow-hidden bg-white px-6 py-32 md:px-10 md:py-44"
//       >
//         <div className="mx-auto max-w-7xl">
//           <div className="grid items-center gap-20 lg:grid-cols-[0.8fr_1.2fr]">
//             <div className="reveal relative">
//               <div className="absolute -inset-5 rounded-[40px] bg-[#dff6f8]" />

//               <div className="relative h-[520px] overflow-hidden rounded-[32px]">
//                 <img
//                   src={IMAGES.source}
//                   alt="Natural water source"
//                   className="story-image h-[120%] w-full object-cover"
//                 />

//                 <div className="absolute inset-0 bg-gradient-to-t from-[#063b4a]/50 via-transparent to-transparent" />

//                 <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between text-white">
//                   <div>
//                     <div className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/60">
//                       Our Beginning
//                     </div>

//                     <div className="mt-2 text-2xl font-light">
//                       Where every drop
//                       <br />
//                       has a purpose.
//                     </div>
//                   </div>

//                   <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 backdrop-blur-md">
//                     <FiDroplet />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <div className="mb-5 flex items-center gap-3">
//                 <span className="h-px w-10 bg-[#48c4d5]" />

//                 <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#087f95]">
//                   Our Story
//                 </span>
//               </div>

//               <div className="overflow-hidden">
//                 <h2 className="section-title-line text-5xl font-light leading-[0.95] tracking-[-0.05em] text-[#063b4a] md:text-7xl">
//                   Where Every Drop
//                   <br />
//                   <span className="font-black">Has a Purpose.</span>
//                 </h2>
//               </div>

//               <p className="reveal mt-8 max-w-2xl text-xl font-light leading-relaxed text-[#315d68]">
//                 We didn't set out to sell water. We set out to earn your trust,
//                 one delivery at a time.
//               </p>

//               <p className="reveal mt-6 max-w-2xl text-sm leading-7 text-[#60838c]">
//                 Jambooneer began with one simple conviction — that clean, safe,
//                 great-tasting water shouldn't be a privilege, it should be a
//                 promise kept to every home, office, and celebration we serve.
//               </p>

//               <p className="reveal mt-5 max-w-2xl text-sm leading-7 text-[#60838c]">
//                 That promise shapes everything: how we purify, how we pack, and
//                 how we show up at your door.
//               </p>

//               <div className="mt-12 grid gap-4 sm:grid-cols-3">
//                 {[
//                   [
//                     "01",
//                     "Pure at the Source",
//                     "Multi-stage RO + UV + mineral balancing.",
//                   ],
//                   [
//                     "02",
//                     "Sustainable by Design",
//                     "Reusable jars and eco-conscious packaging.",
//                   ],
//                   [
//                     "03",
//                     "Lab-Verified, Always",
//                     "200+ safety and quality parameters.",
//                   ],
//                 ].map(([number, title, text]) => (
//                   <div
//                     key={number}
//                     className="reveal rounded-2xl border border-[#063b4a]/10 bg-[#f7fcfd] p-5 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(6,59,74,0.08)]"
//                   >
//                     <div className="text-[9px] font-black tracking-[0.2em] text-[#48c4d5]">
//                       {number}
//                     </div>

//                     <h3 className="mt-5 text-sm font-black text-[#063b4a]">
//                       {title}
//                     </h3>

//                     <p className="mt-2 text-xs leading-5 text-[#60838c]">
//                       {text}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* PRODUCTS */}
//       <section
//         id="products"
//         className="relative overflow-hidden bg-[#eefafb] px-6 py-32 md:px-10 md:py-44"
//       >
//         <div className="mx-auto max-w-7xl">
//           <div className="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end">
//             <div>
//               <div className="mb-5 flex items-center gap-3">
//                 <span className="h-px w-10 bg-[#48c4d5]" />

//                 <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#087f95]">
//                   What We Offer
//                 </span>
//               </div>

//               <div className="overflow-hidden">
//                 <h2 className="section-title-line text-5xl font-light leading-none tracking-[-0.05em] text-[#063b4a] md:text-7xl">
//                   One Brand.
//                   <br />
//                   <span className="font-black">Every Kind of Thirst.</span>
//                 </h2>
//               </div>
//             </div>

//             <p className="max-w-md text-sm leading-6 text-[#60838c]">
//               From a single bottle to a fleet of tankers — Jambooneer scales
//               to meet you where you are.
//             </p>
//           </div>

//           <div className="mb-8 flex gap-2 overflow-x-auto pb-3">
//             {products.map((product, index) => (
//               <button
//                 key={product.number}
//                 onClick={() => setActiveProduct(index)}
//                 className={`whitespace-nowrap rounded-full px-5 py-3 text-[9px] font-black uppercase tracking-[0.15em] transition-all ${
//                   activeProduct === index
//                     ? "bg-[#063b4a] text-white"
//                     : "bg-white text-[#43828d] hover:bg-[#dff6f8]"
//                 }`}
//               >
//                 {product.title}
//               </button>
//             ))}
//           </div>

//           <div className="products-grid grid gap-5 md:grid-cols-2 lg:grid-cols-3">
//             {products.map((product, index) => (
//               <article
//                 key={product.number}
//                 onMouseEnter={() => setActiveProduct(index)}
//                 className={`product-card group relative min-h-[500px] overflow-hidden rounded-[28px] bg-white transition-all duration-700 ${
//                   activeProduct === index
//                     ? "shadow-[0_35px_80px_rgba(6,59,74,0.15)]"
//                     : "shadow-[0_15px_40px_rgba(6,59,74,0.04)]"
//                 }`}
//               >
//                 <div className="absolute inset-0">
//                   <img
//                     src={product.image}
//                     alt={product.title}
//                     className="h-full w-full object-cover transition duration-1000 group-hover:scale-110"
//                   />

//                   <div className="absolute inset-0 bg-gradient-to-t from-[#063b4a] via-[#063b4a]/30 to-transparent" />
//                 </div>

//                 <div className="relative flex h-full min-h-[500px] flex-col justify-between p-7 text-white">
//                   <div className="flex items-start justify-between">
//                     <span className="text-xs font-black tracking-[0.2em] text-white/60">
//                       {product.number}
//                     </span>

//                     <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition-transform duration-500 group-hover:rotate-45">
//                       <FiArrowUpRight />
//                     </span>
//                   </div>

//                   <div>
//                     <h3 className="max-w-sm text-2xl font-black tracking-tight">
//                       {product.title}
//                     </h3>

//                     <p className="mt-3 max-w-sm text-xs leading-5 text-white/70">
//                       {product.text}
//                     </p>

//                     <div className="mt-6 grid gap-2">
//                       {product.items.map((item) => (
//                         <div
//                           key={item}
//                           className="flex items-center gap-2 text-[9px] font-medium text-white/80"
//                         >
//                           <FiCheck className="text-[#8ce1e9]" />
//                           {item}
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* WHY US */}
//       <section
//         id="why-us"
//         className="relative bg-[#063b4a] px-6 py-32 text-white md:px-10 md:py-44"
//       >
//         <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#48c4d5]/10 blur-[130px]" />

//         <div className="mx-auto max-w-7xl">
//           <div className="grid gap-20 lg:grid-cols-[0.8fr_1.2fr]">
//             <div className="lg:sticky lg:top-32 lg:h-fit">
//               <div className="mb-5 flex items-center gap-3">
//                 <span className="h-px w-10 bg-[#8ce1e9]" />

//                 <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#8ce1e9]">
//                   Why Jambooneer
//                 </span>
//               </div>

//               <div className="overflow-hidden">
//                 <h2 className="section-title-line text-5xl font-light leading-[0.95] tracking-[-0.05em] md:text-7xl">
//                   Trust,
//                   <br />
//                   <span className="font-black">Engineered.</span>
//                 </h2>
//               </div>

//               <p className="reveal mt-8 max-w-md text-sm leading-7 text-white/55">
//                 We don't just purify water. We engineer confidence, drop by
//                 drop.
//               </p>

//               <div className="mt-12 flex flex-wrap gap-2">
//                 {[
//                   "FSSAI Certified",
//                   "ISI Mark",
//                   "ISO 9001:2015",
//                   "NABL Tested",
//                 ].map((item) => (
//                   <span
//                     key={item}
//                     className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[8px] font-bold uppercase tracking-[0.15em] text-white/60"
//                   >
//                     {item}
//                   </span>
//                 ))}
//               </div>

//               <div className="reveal mt-14 hidden overflow-hidden rounded-[30px] lg:block">
//                 <img
//                   src={IMAGES.water}
//                   alt="Pure water"
//                   className="h-[300px] w-full object-cover opacity-60"
//                 />
//               </div>
//             </div>

//             <div className="quality-process relative">
//               <div className="absolute bottom-0 left-[22px] top-0 w-px bg-white/10">
//                 <div className="quality-line-progress h-full w-full bg-gradient-to-b from-[#8ce1e9] to-[#25a9bb]" />
//               </div>

//               <div className="grid gap-14">
//                 {[
//                   [
//                     "01",
//                     "Multi-Stage Purification",
//                     "Sediment → RO → UV → UF → Minerals → Ozonation → Final QC Check.",
//                   ],
//                   [
//                     "02",
//                     "Same-Day Delivery",
//                     "Order before cutoff, receive it the same day. No delays, no excuses.",
//                   ],
//                   [
//                     "03",
//                     "Transparent Quality Reports",
//                     "Regular lab reports shared openly with our subscribers — nothing hidden.",
//                   ],
//                   [
//                     "04",
//                     "Support That Never Sleeps",
//                     "WhatsApp, call, or email — we're always one message away.",
//                   ],
//                   [
//                     "05",
//                     "A Commitment Beyond the Bottle",
//                     "Our reusable jar system keeps thousands of plastic bottles out of landfills every month.",
//                   ],
//                 ].map(([number, title, text]) => (
//                   <div
//                     key={number}
//                     className="quality-item relative grid grid-cols-[45px_1fr] gap-7"
//                   >
//                     <div className="relative z-10 flex h-[45px] w-[45px] items-center justify-center rounded-full border border-white/15 bg-[#063b4a] text-[9px] font-black text-[#8ce1e9]">
//                       {number}
//                     </div>

//                     <div className="pb-5">
//                       <h3 className="text-2xl font-black tracking-tight">
//                         {title}
//                       </h3>

//                       <p className="mt-4 max-w-xl text-sm leading-7 text-white/50">
//                         {text}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-[25px] border border-white/10 bg-white/10 sm:grid-cols-4">
//                 {[
//                   ["10000", "Happy Customers"],
//                   ["50000", "Bottles Delivered Daily"],
//                   ["99", "Purity Rate"],
//                   ["7", "Stage Process"],
//                 ].map(([value, label]) => (
//                   <div
//                     key={label}
//                     className="bg-[#063b4a] p-6 text-center"
//                   >
//                     <div className="text-2xl font-black text-[#8ce1e9]">
//                       <span className="counter" data-value={value}>
//                         0+
//                       </span>
//                     </div>

//                     <div className="mt-2 text-[8px] font-bold uppercase tracking-[0.14em] text-white/35">
//                       {label}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* PROCESS */}
//       <section
//         id="process"
//         className="process-section relative overflow-hidden bg-white px-6 py-32 md:px-10 md:py-44"
//       >
//         <div className="mx-auto max-w-7xl">
//           <div className="mx-auto max-w-3xl text-center">
//             <div className="mb-5 flex items-center justify-center gap-3">
//               <span className="h-px w-10 bg-[#48c4d5]" />

//               <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#087f95]">
//                 How It Works
//               </span>

//               <span className="h-px w-10 bg-[#48c4d5]" />
//             </div>

//             <div className="overflow-hidden">
//               <h2 className="section-title-line text-5xl font-light leading-none tracking-[-0.05em] text-[#063b4a] md:text-7xl">
//                 Pure Water.
//                 <br />
//                 <span className="font-black">Four Simple Steps.</span>
//               </h2>
//             </div>
//           </div>

//           <div className="relative mx-auto mt-24 max-w-6xl">
//             <div className="absolute left-0 right-0 top-5 hidden h-px bg-[#063b4a]/10 md:block">
//               <div className="process-progress h-full w-full origin-left bg-[#48c4d5]" />
//             </div>

//             <div className="grid gap-8 md:grid-cols-4">
//               {processSteps.map((step) => (
//                 <div
//                   key={step.number}
//                   className="process-card relative rounded-[25px] border border-[#063b4a]/10 bg-[#f7fcfd] p-7 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_60px_rgba(6,59,74,0.08)]"
//                 >
//                   <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#063b4a] text-[9px] font-black text-white">
//                     {step.number}
//                   </div>

//                   <h3 className="mt-10 text-xl font-black tracking-tight text-[#063b4a]">
//                     {step.title}
//                   </h3>

//                   <p className="mt-4 text-xs leading-6 text-[#60838c]">
//                     {step.text}
//                   </p>

//                   <div className="mt-8 h-px w-10 bg-[#48c4d5]" />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* TESTIMONIALS */}
//       <section
//         className="testimonials-section relative overflow-hidden bg-[#dff6f8] py-32 md:py-44"
//       >
//         <div className="px-6 md:px-10">
//           <div className="mx-auto max-w-7xl">
//             <div className="mb-16">
//               <div className="mb-5 flex items-center gap-3">
//                 <span className="h-px w-10 bg-[#48c4d5]" />

//                 <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#087f95]">
//                   Customer Voices
//                 </span>
//               </div>

//               <div className="overflow-hidden">
//                 <h2 className="section-title-line text-5xl font-light leading-none tracking-[-0.05em] text-[#063b4a] md:text-7xl">
//                   Loved by Homes,
//                   <br />
//                   <span className="font-black">
//                     Offices & Celebrations.
//                   </span>
//                 </h2>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="testimonial-track flex w-max gap-5 px-6 md:px-10">
//           {[...testimonials, ...testimonials].map((item, index) => (
//             <article
//               key={`${item.name}-${index}`}
//               className="w-[330px] rounded-[28px] bg-white p-8 shadow-[0_20px_60px_rgba(6,59,74,0.07)] md:w-[430px]"
//             >
//               <div className="text-xl tracking-[0.2em] text-[#48c4d5]">
//                 ★★★★★
//               </div>

//               <p className="mt-7 text-lg font-light leading-7 text-[#315d68]">
//                 "{item.quote}"
//               </p>

//               <div className="mt-10 border-t border-[#063b4a]/10 pt-5">
//                 <div className="text-sm font-black text-[#063b4a]">
//                   {item.name}
//                 </div>

//                 <div className="mt-1 text-[9px] font-bold uppercase tracking-[0.15em] text-[#57909a]">
//                   {item.role}
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>
//       </section>

//       {/* CONTACT */}
//       <section
//         id="contact"
//         className="contact-section relative overflow-hidden bg-[#063b4a] px-6 py-32 text-white md:px-10 md:py-44"
//       >
//         <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-[#48c4d5]/10 blur-[130px]" />

//         <div className="mx-auto max-w-7xl">
//           <div className="grid gap-20 lg:grid-cols-[0.8fr_1.2fr]">
//             <div className="contact-info">
//               <div className="contact-kicker mb-5 flex items-center gap-3">
//                 <span className="h-px w-10 bg-[#8ce1e9]" />

//                 <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#8ce1e9]">
//                   Get In Touch
//                 </span>
//               </div>

//               <h2 className="contact-heading text-5xl font-light leading-[0.95] tracking-[-0.05em] md:text-7xl">
//                 Let's Start
//                 <br />
//                 <span className="font-black">Your Pure Water</span>
//                 <br />
//                 Journey.
//               </h2>

//               <p className="mt-8 max-w-md text-sm leading-7 text-white/50">
//                 Home, office, or a grand occasion — we're ready. Reach out and
//                 we'll respond within the hour.
//               </p>

//               <div className="mt-12 grid gap-6">
//                 <div className="flex items-start gap-4">
//                   <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/5 text-[#8ce1e9]">
//                     <FiMapPin />
//                   </span>

//                   <div>
//                     <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/30">
//                       Location
//                     </div>

//                     <div className="mt-2 text-sm text-white/70">
//                       Full Address Here
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-4">
//                   <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/5 text-[#8ce1e9]">
//                     <FiPhone />
//                   </span>

//                   <div>
//                     <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/30">
//                       Phone
//                     </div>

//                     <div className="mt-2 text-sm text-white/70">
//                       +91 00000 00000
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-4">
//                   <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/5 text-[#8ce1e9]">
//                     <FiMail />
//                   </span>

//                   <div>
//                     <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/30">
//                       Email
//                     </div>

//                     <div className="mt-2 text-sm text-white/70">
//                       hello@jambooneer.com
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <form
//               className="contact-form rounded-[30px] border border-white/10 bg-white/[0.06] p-7 shadow-[0_30px_100px_rgba(0,0,0,0.18)] backdrop-blur-xl md:p-10"
//               onSubmit={(e) => e.preventDefault()}
//             >
//               <div className="mb-8">
//                 <div className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#8ce1e9]">
//                   Request a Dealership / Enquiry
//                 </div>

//                 <h3 className="mt-3 text-2xl font-black">
//                   Tell us what you need.
//                 </h3>
//               </div>

//               <div className="grid gap-5 md:grid-cols-2">
//                 <input
//                   type="text"
//                   placeholder="Full Name"
//                   className="form-input"
//                 />

//                 <input
//                   type="tel"
//                   placeholder="Phone Number"
//                   className="form-input"
//                 />

//                 <input
//                   type="email"
//                   placeholder="Email Address"
//                   className="form-input md:col-span-2"
//                 />

//                 <textarea
//                   placeholder="Tell us about your requirement..."
//                   rows="6"
//                   className="form-input resize-none md:col-span-2"
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="magnetic mt-7 flex items-center justify-center gap-3 rounded-full bg-[#8ce1e9] px-7 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-[#063b4a] transition hover:bg-white"
//               >
//                 Send Message
//                 <FiSend />
//               </button>

//               <p className="mt-5 text-[9px] leading-5 text-white/30">
//                 By submitting this form, you agree to be contacted by the
//                 Jambooneer team regarding your enquiry.
//               </p>
//             </form>
//           </div>
//         </div>
//       </section>

//       {/* FOOTER */}
//       <footer className="footer bg-[#042f3b] px-6 py-16 text-white md:px-10">
//         <div className="mx-auto max-w-7xl">
//           <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-[1.3fr_1fr_1fr]">
//             <div className="footer-reveal">
//               <div className="flex items-center gap-3">
//                 <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl font-black text-[#063b4a]">
//                   J
//                 </div>

//                 <div>
//                   <div className="text-sm font-black tracking-[0.18em]">
//                     JAMBOONEER
//                   </div>

//                   <div className="mt-1 text-[8px] uppercase tracking-[0.3em] text-[#8ce1e9]">
//                     Pure Water
//                   </div>
//                 </div>
//               </div>

//               <p className="mt-7 max-w-sm text-sm leading-6 text-white/40">
//                 Pure water delivered with care, straight to your doorstep.
//               </p>
//             </div>

//             <div className="footer-reveal">
//               <div className="text-[9px] font-black uppercase tracking-[0.25em] text-[#8ce1e9]">
//                 Products
//               </div>

//               <div className="mt-5 grid gap-3 text-xs text-white/45">
//                 <span>Packaged Water</span>
//                 <span>Dealership</span>
//                 <span>Bulk Supply</span>
//                 <span>Mineral Water</span>
//                 <span>Office Solutions</span>
//                 <span>Event Packages</span>
//               </div>
//             </div>

//             <div className="footer-reveal">
//               <div className="text-[9px] font-black uppercase tracking-[0.25em] text-[#8ce1e9]">
//                 Company
//               </div>

//               <div className="mt-5 grid gap-3 text-xs text-white/45">
//                 <button onClick={() => scrollTo("about")} className="text-left">
//                   About Us
//                 </button>

//                 <button
//                   onClick={() => scrollTo("why-us")}
//                   className="text-left"
//                 >
//                   Why Choose Us
//                 </button>

//                 <button
//                   onClick={() => scrollTo("process")}
//                   className="text-left"
//                 >
//                   How It Works
//                 </button>

//                 <button
//                   onClick={() => scrollTo("contact")}
//                   className="text-left"
//                 >
//                   Contact
//                 </button>

//                 <span>Careers</span>
//               </div>
//             </div>
//           </div>

//           <div className="footer-reveal flex flex-col justify-between gap-5 pt-8 text-[9px] uppercase tracking-[0.18em] text-white/25 md:flex-row">
//             <span>© 2026 Jambooneer. All rights reserved.</span>

//             <span>Pure water. Honest delivery.</span>
//           </div>
//         </div>
//       </footer>

//       {/* STYLES */}
//       <style>{`
//         html {
//           scroll-behavior: auto;
//         }

//         body {
//           margin: 0;
//           background: #f7fcfd;
//           font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
//         }

//         * {
//           box-sizing: border-box;
//         }

//         ::selection {
//           background: #48c4d5;
//           color: #063b4a;
//         }

//         .form-input {
//           width: 100%;
//           border: 1px solid rgba(255,255,255,0.10);
//           border-radius: 14px;
//           background: rgba(255,255,255,0.045);
//           padding: 16px 18px;
//           color: white;
//           outline: none;
//           font-size: 12px;
//           transition:
//             border-color 0.3s ease,
//             background 0.3s ease,
//             transform 0.3s ease;
//         }

//         .form-input::placeholder {
//           color: rgba(255,255,255,0.28);
//         }

//         .form-input:focus {
//           border-color: rgba(140,225,233,0.65);
//           background: rgba(255,255,255,0.08);
//           transform: translateY(-2px);
//         }

//         .nav-link::after {
//           content: "";
//           position: absolute;
//           left: 0;
//           bottom: -7px;
//           width: 100%;
//           height: 1px;
//           background: #48c4d5;
//           transform: scaleX(0);
//           transform-origin: right;
//           transition: transform 0.4s ease;
//         }

//         .nav-link:hover::after {
//           transform: scaleX(1);
//           transform-origin: left;
//         }

//         @media (max-width: 768px) {
//           .hero {
//             min-height: 850px;
//           }

//           .hero-copy-area {
//             padding-bottom: 130px;
//           }
//         }

//         @media (pointer: coarse) {
//           body {
//             cursor: auto;
//           }
//         }
//       `}</style>
//     </main>
//   );
// }