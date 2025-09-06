body {
  background: black;
  color: #00ff00;
  font-family: monospace;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
    0deg,
    rgba(0,255,0,0.05) 0px,
    rgba(0,255,0,0.05) 2px,
    transparent 2px,
    transparent 4px
  );
  animation: glitch 2s infinite;
}

@keyframes glitch {
  0% { opacity: 0.1; }
  50% { opacity: 0.3; }
  100% { opacity: 0.1; }
}

.container {
  position: relative;
  z-index: 2;
  text-align: center;
  padding-top: 50px;
}

.title {
  font-size: 32px;
  text-shadow: 0 0 10px #00ff00;
  margin-bottom: 20px;
}

.form input {
  padding: 10px;
  background: black;
  border: 1px solid #00ff00;
  color: #00ff00;
  width: 250px;
}

.form button {
  padding: 10px 20px;
  background: black;
  border: 1px solid #00ff00;
  color: #00ff00;
  cursor: pointer;
  margin-left: 10px;
}

.terminal {
  margin: 20px auto;
  width: 80%;
  height: 300px;
  background: #111;
  border: 1px solid #00ff00;
  padding: 10px;
  text-align: left;
  overflow-y: auto;
  font-size: 14px;
}
