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

const Hero = ({ onOpenBooking, onNavigate }) => {
  const heroRef = useRef(null);
  const kartRef = useRef(null);

  /* ----------------------------------------------------------
     KART PARALLAX
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
        min-h-[900px]
        lg:min-h-[100svh]
        bg-white
        text-[#0A0A0A]
        overflow-hidden
      "
    >

      {/* ======================================================
          RIGHT SIDE SECTION INDICATORS
      ====================================================== */}

      <div
        className="
          hidden
          lg:flex
          fixed
          right-8
          top-1/2
          -translate-y-1/2
          z-50
          flex-col
          items-center
          gap-3
        "
      >
        {/* ACTIVE */}
        <button
          onClick={() => onNavigate("home")}
          aria-label="Go to Home"
          className="
            w-[11px]
            h-[11px]
            rounded-full
            bg-[#F47C20]
            scale-110
            transition-all
            duration-300
          "
        />

        {/* EXPERIENCE */}
        <button
          onClick={() => onNavigate("who-we-are")}
          aria-label="Go to Experience"
          className="
            w-[10px]
            h-[10px]
            rounded-full
            bg-[#999999]
            hover:bg-[#F47C20]
            transition-colors
            duration-300
          "
        />

        {/* TRACK */}
        <button
          onClick={() => onNavigate("track")}
          aria-label="Go to Track"
          className="
            w-[10px]
            h-[10px]
            rounded-full
            bg-[#999999]
            hover:bg-[#F47C20]
            transition-colors
            duration-300
          "
        />

        {/* KARTS */}
        <button
          onClick={() => onNavigate("karts")}
          aria-label="Go to Karts"
          className="
            w-[10px]
            h-[10px]
            rounded-full
            bg-[#999999]
            hover:bg-[#F47C20]
            transition-colors
            duration-300
          "
        />
      </div>

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
          px-6
          sm:px-8
          lg:px-[54px]
          pt-[150px]
          lg:pt-[155px]
        "
      >

        {/* ====================================================
            SECTION LABEL
        ==================================================== */}

        <motion.div
          {...fadeUp(0.05)}
          className="
            flex
            items-center
            gap-3
            mb-7
            lg:mb-8
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
            KARTOMANIA
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
              font-black
              uppercase
              text-[#111111]

              leading-[0.78]

              tracking-[-0.065em]

              whitespace-nowrap

              text-[17vw]
              sm:text-[15vw]
              md:text-[13.5vw]
              lg:text-[11.6vw]
              xl:text-[11.3vw]
              2xl:text-[11rem]
            "
          >
            KARTOMANIA
          </motion.h1>
        </div>


        {/* ====================================================
            LOWER HERO AREA
        ==================================================== */}

        <div
          className="
            relative
            z-20
            min-h-[430px]
            lg:min-h-[460px]
          "
        >

          {/* ==================================================
              LEFT TEXT CONTENT
          ================================================== */}

          <div
            className="
              absolute
              left-0
              top-[55px]
              lg:top-[58px]

              z-30

              w-[320px]
              sm:w-[370px]
              lg:w-[390px]
            "
          >

            {/* TAGLINE */}

            <motion.p
              {...fadeUp(0.3)}
              className="
                text-[#111111]
                font-semibold

                text-[15px]
                sm:text-[18px]
                lg:text-[20px]

                uppercase

                tracking-[0.16em]

                leading-tight
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
                mt-6
                mb-6
              "
            />


            {/* DESCRIPTION */}

            <motion.p
              {...fadeUp(0.45)}
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


            {/* =================================================
                BUTTONS
            ================================================= */}

            <motion.div
              {...fadeUp(0.55)}
              className="
                flex
                flex-wrap
                items-center
                gap-3
                mt-8
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
              DESKTOP RACING CAR
          ================================================== */}

          <div
            className="
              hidden
              lg:block

              absolute

              right-[-10px]
              xl:right-[20px]
              2xl:right-[50px]

              bottom-[-10px]
              xl:bottom-[-25px]

              z-20

              w-[860px]
              xl:w-[1040px]
              2xl:w-[1180px]
            "
          >

            <motion.div
              ref={kartRef}
              {...kartAnimation}
              className="
                relative
                w-full
              "
              style={{
                willChange: "transform",
              }}
            >

              {/* GROUND SHADOW */}

              <div
                aria-hidden="true"
                className="
                  absolute

                  left-[10%]
                  right-[5%]
                  bottom-[8px]

                  h-[34px]

                  rounded-full

                  blur-[20px]

                  pointer-events-none

                  z-0
                "
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(0,0,0,0.20) 0%, rgba(0,0,0,0) 72%)",
                }}
              />


              {/* RACE CAR */}

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

                  contrast-[1.02]
                "
                style={{
                  aspectRatio: "1000 / 600",
                }}
              />
            </motion.div>
          </div>
        </div>


        {/* ====================================================
            MOBILE RACING CAR
        ==================================================== */}

        <div
          className="
            lg:hidden

            relative

            w-full

            mt-[-15px]
            sm:mt-[-5px]

            z-20
          "
        >

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              relative
              w-full
            "
          >

            {/* MOBILE SHADOW */}

            <div
              className="
                absolute
                left-[12%]
                right-[12%]
                bottom-[4px]
                h-5
                rounded-full
                blur-xl
              "
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(0,0,0,0.18) 0%, transparent 70%)",
              }}
            />

            <img
              src="/avalanche-car-isolated.png"
              alt="Kartomania White Avalanche Race Car"
              width={900}
              height={540}
              loading="eager"
              fetchPriority="high"
              draggable={false}
              className="
                relative
                z-10

                block

                w-full
                max-w-[750px]

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
      </div>


      {/* ======================================================
          HERO BOTTOM SPACING
      ====================================================== */}

      <div
        className="
          h-[25px]
          sm:h-[30px]
          lg:h-[35px]
        "
      />

    </section>
  );
};

export default Hero;
