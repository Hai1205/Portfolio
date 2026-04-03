declare global {
    interface IProject {
        imgPath?: string;
        title: string;
        description: string;
        ghLink: string;
        demoLink?: string;
        isBlog?: boolean;
    }

    interface ITool {
        name: string;
        icon: React.ReactNode;
    }
}

export { };