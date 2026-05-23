// Animation pour les titres principaux
export const title3D = {
    hidden: {
        opacity: 0,
        y: 30,
        rotateX: -45,
        transformPerspective: 1000,
        transformOrigin: '50% 50%',
    },
    visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        rotateX: 0,
        transformPerspective: 1000,
        transition: {
            delay: i * 0.08,
            duration: 0.8,
            ease: [0.16, 0.77, 0.47, 0.97],
        }
    }),
    hover: {
        scale: 1.03,
        rotateY: [0, 10, -10, 5, -5, 0],
        rotateX: [0, 5, -5, 2, -2, 0],
        transition: {
            duration: 1.5,
            ease: "easeInOut"
        }
    }
};

// Animation pour les sous-titres
export const subtitle3D = {
    hidden: {
        opacity: 0,
        y: 20,
        rotateX: -30,
        transformPerspective: 1000,
    },
    visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: {
            delay: 0.5 + (i * 0.05),
            duration: 0.8,
            ease: [0.16, 0.77, 0.47, 0.97],
        }
    }),
    hover: {
        scale: 1.02,
        rotateY: 5,
        transition: {
            duration: 0.3
        }
    }
};

// Animation pour les paragraphes
export const paragraph3D = {
    hidden: {
        opacity: 0,
        y: 15,
        rotateX: -15,
    },
    visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: {
            duration: 0.8,
            ease: [0.16, 0.77, 0.47, 0.97]
        }
    },
    hover: {
        rotateZ: [0, 0.5, -0.5, 0],
        transition: {
            duration: 0.5,
            ease: "easeInOut"
        }
    }
};

// Animation pour les boutons
export const button3D = {
    hidden: {
        opacity: 0,
        y: 10,
        rotateX: -15,
    },
    visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: {
            duration: 0.6,
            ease: [0.16, 0.77, 0.47, 0.97]
        }
    },
    hover: {
        scale: 1.05,
        rotateY: [0, 5, -5, 0],
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: {
            duration: 0.5,
            boxShadow: {
                duration: 0.3
            }
        }
    },
    tap: {
        scale: 0.98
    }
};

// Animation pour les conteneurs
export const container3D = {
    hidden: { opacity: 0 },
    visible: (delay: number = 0) => ({
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2 + delay,
            when: "beforeChildren"
        }
    })
};

// Animation pour les cartes et éléments en grille
export const card3D = {
    hidden: {
        opacity: 0,
        y: 20,
        rotateX: -20,
    },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.6,
            ease: [0.16, 0.77, 0.47, 0.97]
        }
    }),
    hover: {
        y: -5,
        rotateY: 2,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: {
            duration: 0.3,
            boxShadow: {
                duration: 0.2
            }
        }
    }
};

// Animation pour les images
export const image3D = {
    hidden: {
        opacity: 0,
        scale: 0.9,
        rotateY: -10,
    },
    visible: {
        opacity: 1,
        scale: 1,
        rotateY: 0,
        transition: {
            duration: 0.8,
            ease: [0.16, 0.77, 0.47, 0.97]
        }
    },
    hover: {
        rotateY: [0, 5, -5, 0],
        transition: {
            duration: 2,
            ease: "easeInOut"
        }
    }
};
