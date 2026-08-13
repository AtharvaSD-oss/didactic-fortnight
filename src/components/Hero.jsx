import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import MagneticButton from "./MagneticButton";

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

/* ============================================================
   HERO
============================================================ */

const Hero = ({ onOpenBooking, _onNavigate }) => {
  return (
    <section
      id="home"
      className="
        relative
        w-full
        min-h-0
        lg:min-h-[90svh]
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
              font-anton
              font-display
              font-black
              uppercase

              leading-[0.78]

              tracking-[-0.065em]

              whitespace-nowrap

              text-[10vw]
              sm:text-[8.5vw]
              md:text-[8vw]
              lg:text-[11.6vw]
              xl:text-[11.3vw]
              2xl:text-[11rem]
            "
          >
            <span className="text-[#F47C20]">KART</span>
            <span className="text-[#FFC700] drop-shadow-[0_4px_12px_rgba(255,199,0,0.25)]">OMANIA</span>
          </motion.h1>
        </div>


        {/* ====================================================
            LOWER HERO AREA
        ==================================================== */}

        <div
          className="
            relative
            z-20
            pb-12
            lg:pb-16
          "
        >

          {/* ==================================================
              TEXT CONTENT & BUTTONS
          ================================================== */}

          <div
            className="
              pt-[30px]
              lg:pt-[45px]

              z-30

              w-full
              max-w-[450px]
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
                mt-5
                mb-5
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


            {/* BUTTONS */}

            <motion.div
              {...fadeUp(0.55)}
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
