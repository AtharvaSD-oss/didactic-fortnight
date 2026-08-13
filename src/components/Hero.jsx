import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, MapPin } from "lucide-react";
import MagneticButton from "./MagneticButton";

gsap.registerPlugin(ScrollTrigger);

/* ============================================================
   ANIMATION SETTINGS
============================================================ */

const fadeUp = (delay = 0) => ({
  initial: {
    opacity: 0,
    y: 24,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  transition: {
    duration: 0.8,
    delay,
    ease: [0.22, 1, 0.36, 1],
  },
});

const titleAnimation = {
  initial: {
    opacity: 0,
    y: 35,
    scale: 0.98,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  transition: {
    duration: 1,
    delay: 0.15,
    ease: [0.16, 1, 0.3, 1],
  },
};

const kartAnimation = {
  initial: {
    opacity: 0,
    x: 80,
    y: 40,
    scale: 0.96,
  },
  animate: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
  },
  transition: {
    duration: 1.1,
    delay: 0.45,
    ease: [0.16, 1, 0.3, 1],
  },
};

/* ============================================================
   HERO
============================================================ */

const Hero = ({ onOpenBooking, _onNavigate }) => {
  const heroRef = useRef(null);
  const kartRef = useRef(null);

  /* ----------------------------------------------------------
     KART PARALLAX (Desktop)
  ---------------------------------------------------------- */

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!kartRef.current || !heroRef.current) return;

      gsap.to(kartRef.current, {
        y: -28,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="
        relative
        w-full
        min-h-0
        lg:min-h-[100svh]
        bg-white
        text-[#0A0A0A]
        overflow-hidden
      "
    >
      {/* ======================================================
          MAIN HERO CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          z-10
          w-full
          max-w-[1600px]
          mx-auto
          px-4
          sm:px-8
          lg:px-[54px]
          pt-[85px]
          sm:pt-[100px]
          lg:pt-[125px]
        "
      >

        {/* ====================================================
            LIVE TRACK TELEMETRY STATUS BAR
        ==================================================== */}

        <motion.div
          {...fadeUp(0.02)}
          className="
            inline-flex
            flex-wrap
            items-center
            gap-2.5
            sm:gap-3
            px-3.5
            py-1.5
            mb-4
            rounded-md
            bg-[#FFF0E5]
            border
            border-[#F47C20]/30
            text-xs
            font-mono
            font-bold
            shadow-sm
          "
        >
          <span className="inline-flex items-center gap-1.5 text-[#16a34a]">
            <span className="w-2 h-2 rounded-full bg-[#16a34a] animate-pulse" />
            TRACK OPEN TODAY (11:00 AM – 10:00 PM)
          </span>

          <span className="text-[#999999] hidden sm:inline">|</span>

          <span className="text-[#111111] hidden sm:inline">
            ENTERTAINLAND MALL, SECTOR 83
          </span>

          <span className="text-[#999999] hidden md:inline">|</span>

          <a
            href="https://maps.app.goo.gl/7c5CMX5a4vaaXFLN9"
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex
              items-center
              gap-1
              text-[#F47C20]
              hover:underline
              font-bold
            "
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>1-TAP MAPS &rarr;</span>
          </a>
        </motion.div>

        {/* ====================================================
            SECTION LABEL
        ==================================================== */}

        <motion.div
          {...fadeUp(0.05)}
          className="
            flex
            items-center
            gap-3
            mb-4
            lg:mb-5
          "
        >
          <span
            className="
              block
              w-[2px]
              h-[20px]
              bg-[#F47C20]
            "
          />

          <span
            className="
              text-[#F47C20]
              text-[14px]
              sm:text-[15px]
              font-bold
              tracking-[0.12em]
            "
          >
            01
          </span>

          <span
            className="
              text-[#111111]
              text-[14px]
              sm:text-[15px]
              font-bold
              tracking-[0.12em]
            "
          >
            /
          </span>

          <span
            className="
              text-[#111111]
              text-[14px]
              sm:text-[15px]
              font-bold
              tracking-[0.12em]
            "
          >
            HOME
          </span>
        </motion.div>


        {/* ====================================================
            GIANT KARTOMANIA TITLE
        ==================================================== */}

        <div
          className="
            relative
            z-10
            w-full
            overflow-visible
          "
        >
          <motion.h1
            {...titleAnimation}
            className="
              font-display
              font-extrabold
              uppercase

              leading-[0.8]

              tracking-[0.07em]

              whitespace-nowrap

              text-[12.5vw]
              sm:text-[10.8vw]
              md:text-[10vw]
              lg:text-[13.5vw]
              xl:text-[13.2vw]
              2xl:text-[13.5rem]
            "
          >
            <span className="text-[#F47C20]">KART</span>
            <span className="text-[#FFC700] drop-shadow-[0_4px_12px_rgba(255,199,0,0.25)]">OMANIA</span>
          </motion.h1>
        </div>


        {/* ====================================================
            MOBILE & TABLET PROMINENT KART IMAGE (Placed right below KARTOMANIA title)
        ==================================================== */}

        <div
          className="
            lg:hidden
            relative
            w-full
            my-4
            sm:my-6
            z-20
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              relative
              w-full
            "
          >
            {/* HYPER-REALISTIC MOBILE TIRE CONTACT & GROUND SHADOW */}
            <div
              className="
                absolute
                left-[8%]
                right-[6%]
                bottom-[20%]
                h-5
                rounded-full
                blur-md
                pointer-events-none
                z-0
              "
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(0,0,0,0.50) 0%, rgba(0,0,0,0.20) 50%, transparent 80%)",
              }}
            />

            <img
              src="/avalanche-car-isolated.png"
              alt="Kartomania White Avalanche Race Car"
              width={950}
              height={570}
              loading="eager"
              fetchPriority="high"
              draggable={false}
              className="
                relative
                z-10

                block

                w-full
                max-w-[820px]

                mx-auto

                h-auto

                object-contain

                mix-blend-multiply

                select-none
                pointer-events-none
              "
            />
          </motion.div>
        </div>


        {/* ====================================================
            LOWER HERO AREA
        ==================================================== */}

        <div
          className="
            relative
            z-20
            min-h-0
            lg:min-h-[460px]
          "
        >

          {/* ==================================================
              TEXT CONTENT & BUTTONS
          ================================================== */}

          <div
            className="
              relative
              lg:absolute
              left-0
              top-0
              lg:top-[58px]

              z-30

              w-full
              max-w-[420px]
              sm:max-w-[450px]
              lg:max-w-[480px]
              pt-2
              lg:pt-0
            "
          >

            {/* TAGLINE */}

            <motion.p
              {...fadeUp(0.35)}
              className="
                text-[#111111]
                font-extrabold

                text-[14px]
                sm:text-[17px]
                lg:text-[19px]

                uppercase

                tracking-[0.12em]
                sm:tracking-[0.16em]

                leading-tight

                whitespace-nowrap
              "
            >
              RACE. EXPERIENCE. REMEMBER.
            </motion.p>


            {/* ORANGE LINE */}

            <motion.div
              initial={{
                opacity: 0,
                scaleX: 0,
              }}
              animate={{
                opacity: 1,
                scaleX: 1,
              }}
              transition={{
                duration: 0.5,
                delay: 0.45,
                ease: "easeOut",
              }}
              style={{
                transformOrigin: "left center",
              }}
              className="
                w-[84px]
                h-[2px]
                bg-[#F47C20]
                mt-5
                mb-5
              "
            />


            {/* DESCRIPTION */}

            <motion.p
              {...fadeUp(0.5)}
              className="
                text-[#333333]

                text-[15px]
                sm:text-[16px]

                leading-[1.8]

                max-w-[350px]
              "
            >
              Where speed meets adrenaline.
              <br />

              <span className="text-[#111111] font-semibold">
                Experience Kartomania.
              </span>
            </motion.p>


            {/* BUTTONS */}

            <motion.div
              {...fadeUp(0.6)}
              className="
                flex
                flex-wrap
                items-center
                gap-3
                mt-6
                lg:mt-8
              "
            >

              {/* PRIMARY BOOKING BUTTON */}

              <MagneticButton
                onClick={onOpenBooking}
                variant="primary"
                className="
                  group
                  h-[54px]
                  px-6
                  sm:px-7

                  bg-[#0A0A0A]
                  text-white

                  text-[12px]
                  sm:text-[13px]

                  font-bold

                  rounded-[5px]

                  shadow-none

                  transition-all
                  duration-300

                  hover:bg-[#F47C20]
                "
              >
                <span>BOOK YOUR RACE</span>

                <ArrowRight
                  className="
                    inline-block
                    w-4
                    h-4
                    ml-2

                    text-[#F47C20]

                    group-hover:text-white

                    transition-colors
                    duration-300
                  "
                />
              </MagneticButton>


              {/* DIRECTIONS */}

              <a
                href="https://maps.app.goo.gl/7c5CMX5a4vaaXFLN9"
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2

                  h-[54px]
                  px-5

                  border
                  border-[#DCDCDC]

                  bg-white

                  text-[#111111]

                  text-[11px]

                  font-bold

                  tracking-[0.08em]

                  uppercase

                  rounded-[5px]

                  transition-all
                  duration-300

                  hover:border-[#F47C20]
                  hover:text-[#F47C20]
                "
              >
                <MapPin
                  className="
                    w-4
                    h-4
                    text-[#F47C20]
                  "
                />

                GET DIRECTIONS
              </a>
            </motion.div>
          </div>


          {/* ==================================================
              DESKTOP RACING CAR (Large right side layout for desktop)
          ================================================== */}

          <div
            ref={kartRef}
            className="
              hidden
              lg:block

              absolute

              right-[10px]
              xl:right-[45px]
              2xl:right-[85px]

              bottom-[-8px]
              xl:bottom-[-20px]

              z-20

              w-[890px]
              xl:w-[1080px]
              2xl:w-[1240px]
            "
          >

            <motion.div
              {...kartAnimation}
              className="
                relative
                w-full
              "
              style={{
                willChange: "transform",
              }}
            >

              {/* HYPER-REALISTIC TIRE CONTACT SHADOWS & AMBIENT GROUND REFLECTION */}

              {/* 1. Front Left Tire Contact Patch (Far Left Wheel) */}
              <div
                aria-hidden="true"
                className="absolute left-[7%] bottom-[25%] w-[18%] h-[20px] rounded-full blur-[6px] pointer-events-none z-0"
                style={{
                  background: "radial-gradient(ellipse at center, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.25) 50%, transparent 80%)",
                }}
              />

              {/* 2. Front Right Tire Contact Patch (Center-Left Main Wheel) */}
              <div
                aria-hidden="true"
                className="absolute left-[36%] bottom-[20%] w-[20%] h-[24px] rounded-full blur-[8px] pointer-events-none z-0"
                style={{
                  background: "radial-gradient(ellipse at center, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.30) 50%, transparent 80%)",
                }}
              />

              {/* 3. Rear Right Tire Contact Patch (Far Right Large Wheel) */}
              <div
                aria-hidden="true"
                className="absolute right-[4%] bottom-[26%] w-[18%] h-[24px] rounded-full blur-[7px] pointer-events-none z-0"
                style={{
                  background: "radial-gradient(ellipse at center, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.28) 50%, transparent 80%)",
                }}
              />

              {/* 4. Under-Chassis / Axle Soft Ambient Ground Shadow */}
              <div
                aria-hidden="true"
                className="absolute left-[15%] right-[10%] bottom-[22%] h-[26px] rounded-[100%] blur-[12px] pointer-events-none z-0"
                style={{
                  background: "radial-gradient(ellipse at center, rgba(0,0,0,0.40) 0%, rgba(0,0,0,0.15) 55%, transparent 85%)",
                }}
              />

              {/* RACE CAR WITH FLUSH SHADOW FILTER */}

              <img
                src="/avalanche-car-isolated.png"
                alt="Kartomania White Avalanche Race Car"
                width={1000}
                height={600}
                loading="eager"
                fetchPriority="high"
                draggable={false}
                className="
                  relative
                  z-10

                  block

                  w-full
                  h-auto

                  object-contain

                  select-none
                  pointer-events-none

                  mix-blend-multiply

                  contrast-[1.04]
                "
                style={{
                  aspectRatio: "1000 / 600",
                  filter: "drop-shadow(0px 8px 16px rgba(0, 0, 0, 0.20))",
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>


      {/* ======================================================
          HERO BOTTOM SPACING
      ====================================================== */}

      <div
        className="
          h-[15px]
          sm:h-[20px]
        "
      />

    </section>
  );
};

export default Hero;
