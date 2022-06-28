// gsap
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const gsapAnimation = (section) => {
    section.current.forEach((el, index) => {
        // parallax bg
        const foreground1 = el.querySelector(`#img1`);
        const foreground2 = el.querySelector("#img2");
        const foreground3 = el.querySelector("#img3");
        const foreground4 = el.querySelector("#img4");

        // content elements
        const links = el.querySelector(".links");
        const sectionLeft = el.querySelector(".section-left");
        const projectDescription = el.querySelector(".project-destails");
        const title = el.querySelector(".title");

        ScrollTrigger.matchMedia({
            // large

            "(min-width: 966px)": function () {
                ScrollTrigger.saveStyles([
                    foreground1,
                    foreground2,
                    foreground3,
                    foreground4,
                    links,
                    sectionLeft,
                    projectDescription,
                    title,
                ]); // save styles
                const tl = gsap
                    .timeline({ ease: "none" })
                    .from(
                        foreground1,
                        {
                            y: "50px",
                            duration: 1,
                        },
                        "=<"
                    )
                    .from(
                        foreground2,
                        {
                            y: "150px",
                            duration: 1,
                        },
                        "=<"
                    )
                    .from(
                        foreground3,
                        {
                            y: "300px",
                            duration: 1,
                        },
                        "=<"
                    )
                    .from(
                        foreground4,
                        {
                            y: "350px",
                            duration: 1,
                        },
                        "=<"
                    )
                    .from(
                        title,
                        {
                            y: "-200px",
                            duration: 1,
                            opacity: 0,
                        },
                        "=<"
                    )
                    .fromTo(
                        sectionLeft,
                        { xPercent: 200, opacity: 0 },
                        { xPercent: 50, opacity: 1 },
                        "=<"
                    )
                    .from(projectDescription, {
                        opacity: 0,
                        yPercent: "+=100",
                    })
                    .from(links, {
                        opacity: 0,
                        y: "-200px",
                    });
                ScrollTrigger.create({
                    trigger: el,
                    start: "top top",
                    toggleActions: "play none none reverse",
                    // stagger: 2,
                    scrub: 0.5,
                    animation: tl,
                    pin: el,
                    pinSpacing: true,
                });
            },
            "(max-width: 965px)": function () {
                ScrollTrigger.saveStyles([
                    foreground1,
                    foreground2,
                    foreground3,
                    foreground4,
                    links,
                    sectionLeft,
                    projectDescription,
                    title,
                ]); // save styles
                const tl = gsap
                    .timeline({ ease: "none" })
                    .from(
                        foreground1,
                        {
                            y: "50px",
                            duration: 1,
                        },
                        "=<"
                    )
                    .from(
                        foreground2,
                        {
                            y: "150px",
                            duration: 1,
                        },
                        "=<"
                    )
                    .from(
                        foreground3,
                        {
                            y: "300px",
                            duration: 1,
                        },
                        "=<"
                    )
                    .from(
                        foreground4,
                        {
                            y: "350px",
                            duration: 1,
                        },
                        "=<"
                    )
                    // end of backgrounds
                    .from(
                        title,
                        {
                            y: "-200px",
                            duration: 1,
                            opacity: 0,
                        },
                        "=<"
                    )
                    .fromTo(
                        sectionLeft,
                        { yPercent: 200, opacity: 0 },
                        { yPercent: 0, opacity: 1 },
                        "=<"
                    )
                    .from(projectDescription, {
                        opacity: 0,
                        yPercent: "+=100",
                    })
                    .from(links, {
                        opacity: 0,
                        y: "200px",
                    });
                ScrollTrigger.create({
                    trigger: el,
                    start: "top top",

                    toggleActions: "play none none reverse",
                    // stagger: 2,
                    scrub: 0.5,
                    animation: tl,
                    pin: el,
                    pinSpacing: true,
                });
            },
        });
    });
};

export default gsapAnimation;
