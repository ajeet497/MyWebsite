import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
    <div className={styles.navBox}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Project</a>
        <a href="#contact">Contact</a>
        

    </div>
    
    );
    
  
  
};

export default Navbar;

