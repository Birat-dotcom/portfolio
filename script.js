@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap');

/* smooth scroll */
html {
  scroll-behavior: smooth
}

/* reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Plus Jakarta Sans', sans-serif
}

/* body */
body {
  background: #050505;
  color: #f0f0f0;
  overflow-x: hidden;
  text-align: center
}

/* background */
body::before {
  content: "";
  position: fixed;
  inset: 0;
  z-index: -1;
  background:
    radial-gradient(circle at 50% 10%, rgba(184, 142, 87, .12), transparent 50%),
    linear-gradient(rgba(5, 5, 5, .85), rgba(5, 5, 5, .95)),
    url("photo-1534422298391-e4f8c172dddb.jpg");
  background-size: cover;
  background-position: center
}

/* header */
header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(10, 10, 10, .85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, .05)
}

/* logo */
.logo-container {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none
}

.logo-icon {
  font-size: 1.6rem;
  background: linear-gradient(135deg, #f5d6b1, #b88e57);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent
}

.logo-text {
  font-family: 'Cinzel', serif;
  font-size: 1.6rem
}

/* nav */
nav {
  display: flex;
  gap: 20px
}

nav a {
  color: #aaa;
  text-decoration: none;
  font-size: .95rem;
  position: relative;
  transition: .3s
}

nav a:hover,
nav a.active {
  color: #f5d6b1
}

nav a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -4px;
  height: 2px;
  width: 0%;
  background: linear-gradient(90deg, #f5d6b1, #b88e57);
  transition: .3s
}

nav a:hover::after,
nav a.active::after {
  width: 100%
}

/* sections */
.section {
  padding: 140px 20px 60px
}

.section h2 {
  font-family: 'Cinzel', serif;
  font-size: 2.8rem;
  margin-bottom: 20px;
  background: linear-gradient(180deg, #fff, #bbb);
  -webkit-background-clip: text
}

.section-subtitle {
  font-size: .8rem;
  letter-spacing: 4px;
  color: #b88e57;
  margin-bottom: 10px
}

/* hero */
.hero-banner h2 {
  font-size: 3.2rem
}

.hero-banner p {
  color: #aaa;
  margin: 10px 0 20px
}

/* button */
button {
  padding: 12px 26px;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  background: linear-gradient(135deg, #f5d6b1, #b88e57);
  transition: .3s;
  color: #000
}

button:hover {
  transform: translateY(-4px) scale(1.03);
  box-shadow: 0 10px 25px rgba(184, 142, 87, .4)
}

/* menu */
.menu {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
  max-width: 1000px;
  margin: auto
}

.card {
  background: rgba(255, 255, 255, .03);
  border: 1px solid rgba(255, 255, 255, .08);
  padding: 25px;
  border-radius: 16px;
  transition: .3s
}

.card:hover {
  transform: translateY(-10px);
  border-color: #b88e57;
  box-shadow: 0 10px 30px rgba(184, 142, 87, .15)
}

/* services */
.services-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 25px;
  max-width: 1100px;
  margin: auto
}

.premium-card {
  position: relative;
  border-radius: 22px;
  overflow: hidden;
  background: rgba(255, 255, 255, .03);
  transition: .4s
}

.premium-card:hover {
  transform: translateY(-14px) scale(1.03)
}

.premium-card::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 22px;
  background: linear-gradient(135deg, #f5d6b1, transparent, #b88e57);
  opacity: 0;
  transition: .4s
}

.premium-card:hover::after {
  opacity: 1
}

.card-content {
  padding: 40px 30px;
  background: rgba(15, 15, 15, .75);
  backdrop-filter: blur(25px);
  position: relative;
  z-index: 2
}

/* icon */
.icon-wrapper {
  width: 70px;
  height: 70px;
  margin: auto;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(184, 142, 87, .1);
  transition: .3s
}

.premium-card:hover .icon-wrapper {
  transform: scale(1.2) rotate(8deg);
  background: rgba(184, 142, 87, .25);
  box-shadow: 0 0 20px rgba(184, 142, 87, .3)
}

/* text */
.premium-card h3 {
  margin: 15px 0 10px
}

.premium-card p {
  color: #aaa;
  font-size: .9rem
}

/* form */
.form {
  max-width: 420px;
  margin: auto;
  padding: 30px;
  border-radius: 16px;
  background: rgba(255, 255, 255, .03);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, .08)
}

.form input,
.form textarea {
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  background: rgba(255, 255, 255, .05);
  border: 1px solid rgba(255, 255, 255, .1);
  border-radius: 8px;
  color: #fff;
  transition: .3s
}

.form input:focus,
.form textarea:focus {
  border-color: #b88e57;
  outline: none;
  box-shadow: 0 0 12px rgba(184, 142, 87, .2)
}

/* toast */
#toast {
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 12px 18px;
  border-radius: 10px;
  color: #fff;
  opacity: 0;
  transform: translateX(120%);
  transition: .4s;
  z-index: 9999
}

#toast.show {
  opacity: 1;
  transform: translateX(0)
}

#toast.success {
  background: #28a745
}

#toast.error {
  background: #dc3545
}

#toast.warning {
  background: #ff9800
}

/* footer */
footer {
  padding: 30px;
  color: #777
}

/* mobile */
@media(max-width:768px) {
  header {
    flex-direction: column;
    gap: 10px
  }

  nav {
    flex-wrap: wrap;
    justify-content: center
  }

  .section h2 {
    font-size: 2.2rem
  }

  .hero-banner h2 {
    font-size: 2.4rem
  }
}
