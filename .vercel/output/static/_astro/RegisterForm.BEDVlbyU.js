import{j as e,s as h}from"./supabase.C18uiDbO.js";import{r as a}from"./index.DK-fsZOb.js";function j(){const[n,l]=a.useState(""),[t,c]=a.useState(""),[d,m]=a.useState(""),[f,s]=a.useState(!1),[p,i]=a.useState(""),[g,x]=a.useState(""),u=async r=>{if(r.preventDefault(),s(!0),i(""),x(""),t!==d){i("Las contraseñas no coinciden"),s(!1);return}if(t.length<6){i("La contraseña debe tener al menos 6 caracteres"),s(!1);return}try{const{data:o,error:b}=await h.auth.signUp({email:n,password:t});if(b)throw b;o.user&&(x("¡Registro exitoso! Revisa tu correo electrónico para confirmar tu cuenta."),l(""),c(""),m(""))}catch(o){i(o.message)}finally{s(!1)}};return e.jsxs("div",{className:"register-container",children:[e.jsx("div",{className:"scroll-progress"}),e.jsx("section",{className:"hero hero-scroll-effect",children:e.jsxs("div",{className:"hero-content",children:[e.jsxs("div",{className:"hero-text",children:[e.jsx("h1",{className:"hero-title",children:e.jsx("span",{className:"title-main",children:"Dictum"})}),e.jsx("div",{className:"hero-info",children:e.jsxs("div",{className:"status-row",children:[e.jsx("span",{className:"status-text status-available",children:"Sistema de Gestión Legal"}),e.jsxs("span",{className:"platform-item platform-windows",children:[e.jsx("i",{className:"fas fa-user-plus"})," Registro"]})]})}),e.jsx("p",{className:"hero-description",children:"Únete a Dictum y comienza a gestionar tus casos legales de manera eficiente y profesional."}),e.jsx("div",{className:"register-form-container",children:e.jsxs("form",{className:"register-form",onSubmit:u,children:[e.jsxs("div",{className:"form-group",children:[e.jsxs("label",{htmlFor:"email",className:"form-label",children:[e.jsx("i",{className:"fas fa-envelope"}),"Correo electrónico"]}),e.jsx("input",{id:"email",name:"email",type:"email",autoComplete:"email",required:!0,className:"form-input",placeholder:"tu@email.com",value:n,onChange:r=>l(r.target.value)})]}),e.jsxs("div",{className:"form-group",children:[e.jsxs("label",{htmlFor:"password",className:"form-label",children:[e.jsx("i",{className:"fas fa-lock"}),"Contraseña"]}),e.jsx("input",{id:"password",name:"password",type:"password",autoComplete:"new-password",required:!0,className:"form-input",placeholder:"••••••••",value:t,onChange:r=>c(r.target.value)})]}),e.jsxs("div",{className:"form-group",children:[e.jsxs("label",{htmlFor:"confirmPassword",className:"form-label",children:[e.jsx("i",{className:"fas fa-lock"}),"Confirmar Contraseña"]}),e.jsx("input",{id:"confirmPassword",name:"confirmPassword",type:"password",autoComplete:"new-password",required:!0,className:"form-input",placeholder:"••••••••",value:d,onChange:r=>m(r.target.value)})]}),p&&e.jsxs("div",{className:"error-message",children:[e.jsx("i",{className:"fas fa-exclamation-triangle"}),p]}),g&&e.jsxs("div",{className:"success-message",children:[e.jsx("i",{className:"fas fa-check-circle"}),g]}),e.jsx("button",{type:"submit",disabled:f,className:"btn-register hover-lift",children:f?e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fas fa-spinner fa-spin"}),"Creando cuenta..."]}):e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fas fa-user-plus"}),"Crear Cuenta"]})}),e.jsxs("div",{className:"register-links",children:[e.jsxs("a",{href:"/login",className:"link-text",children:[e.jsx("i",{className:"fas fa-sign-in-alt"}),"¿Ya tienes cuenta? Inicia sesión"]}),e.jsxs("a",{href:"/",className:"link-text",children:[e.jsx("i",{className:"fas fa-arrow-left"}),"Volver al inicio"]})]})]})})]}),e.jsx("div",{className:"hero-visual",children:e.jsx("div",{className:"app-showcase",children:e.jsx("img",{src:"/Recursos/Main/mainclaro.png",alt:"Dictum App Interface",className:"app-screenshot",style:{width:"200%"}})})})]})}),e.jsx("style",{jsx:!0,children:`
        .register-container {
          min-height: 100vh;
          background: #000000;
          color: #ffffff;
          font-family: 'Inter', sans-serif;
          overflow-x: hidden;
        }

        /* Scroll Progress Bar */
        .scroll-progress {
          position: fixed;
          top: 0;
          left: 0;
          width: 0%;
          height: 3px;
          background: linear-gradient(90deg, #ff6b6b, #4ecdc4, #45b7d1);
          z-index: 1002;
          transition: width 0.1s ease;
        }

        /* Hero Section */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: #000000;
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.02) 0%, transparent 50%);
          animation: subtleMove 30s ease-in-out infinite;
        }

        .hero-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .hero-text {
          display: flex;
          flex-direction: column;
        }

        .hero-title {
          margin-bottom: 2rem;
        }

        .title-main {
          display: block;
          font-size: 4rem;
          font-weight: 900;
          background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 3s ease-in-out infinite;
          margin-bottom: 0.5rem;
        }

        .hero-info {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          margin-bottom: 2rem;
        }

        .status-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1.5rem;
          width: 100%;
          max-width: 350px;
        }

        .status-text {
          min-width: 150px;
          text-align: right;
          font-size: 1.2rem;
          color: #ffffff;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 600;
        }

        .status-available {
          font-size: 1rem;
          color: #ffffff;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 600;
          opacity: 1;
        }

        .platform-item {
          padding: 0.5rem 1rem;
          border-radius: 25px;
          font-size: 0.9rem;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.1);
          position: relative;
        }

        .platform-windows {
          background: rgba(78, 205, 196, 0.2);
          border: 1px solid #4ecdc4;
          color: #ffffff;
        }

        .platform-windows .fa-user-plus {
          color: #4ecdc4;
        }

        .hero-description {
          font-size: 1.1rem;
          line-height: 1.6;
          color: #cccccc;
          margin-bottom: 2rem;
        }

        /* Register Form Styles */
        .register-form-container {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 2rem;
          backdrop-filter: blur(10px);
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.3),
            0 0 0 1px rgba(255, 255, 255, 0.1),
            0 0 50px rgba(78, 205, 196, 0.1);
          transition: all 0.3s ease;
        }

        .register-form-container:hover {
          border-color: rgba(78, 205, 196, 0.3);
          box-shadow: 
            0 25px 50px rgba(0, 0, 0, 0.4),
            0 0 0 1px rgba(78, 205, 196, 0.2),
            0 0 80px rgba(78, 205, 196, 0.2);
        }

        .register-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-label {
          font-size: 0.9rem;
          font-weight: 600;
          color: #ffffff;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .form-label i {
          color: #4ecdc4;
          font-size: 1rem;
        }

        .form-input {
          padding: 1rem 1.5rem;
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          background: rgba(255, 255, 255, 0.05);
          color: #ffffff;
          font-size: 1rem;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .form-input::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }

        .form-input:focus {
          outline: none;
          border-color: #4ecdc4;
          box-shadow: 
            0 0 0 3px rgba(78, 205, 196, 0.1),
            0 0 20px rgba(78, 205, 196, 0.2);
          background: rgba(255, 255, 255, 0.08);
        }

        .error-message {
          background: rgba(255, 107, 107, 0.1);
          border: 1px solid rgba(255, 107, 107, 0.3);
          color: #ff6b6b;
          padding: 1rem;
          border-radius: 10px;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
        }

        .error-message i {
          font-size: 1rem;
        }

        .success-message {
          background: rgba(78, 205, 196, 0.1);
          border: 1px solid rgba(78, 205, 196, 0.3);
          color: #4ecdc4;
          padding: 1rem;
          border-radius: 10px;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
        }

        .success-message i {
          font-size: 1rem;
        }

        /* Botón de Registro con Animated Gradient Text */
        .btn-register {
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          padding: 1rem 2rem;
          font-size: 1rem;
          font-weight: 600;
          text-decoration: none;
          color: transparent;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-image: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #ff6b6b);
          background-size: 300% 300%;
          animation: gradientShift 3s ease-in-out infinite;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(10px);
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          min-width: 160px;
          height: 50px;
          font-family: 'Inter', sans-serif;
        }

        .btn-register::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transition: left 0.5s ease;
        }

        .btn-register::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: radial-gradient(circle, rgba(78, 205, 196, 0.3) 0%, transparent 70%);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: all 0.3s ease;
          z-index: -1;
        }

        .btn-register:hover {
          transform: translateY(-3px);
          box-shadow: 
            0 10px 25px rgba(78, 205, 196, 0.3),
            0 0 20px rgba(78, 205, 196, 0.2),
            inset 0 0 20px rgba(78, 205, 196, 0.1);
          border-color: rgba(78, 205, 196, 0.5);
          background-image: linear-gradient(45deg, #4ecdc4, #45b7d1, #ff6b6b, #4ecdc4);
        }

        .btn-register:hover::before {
          left: 100%;
        }

        .btn-register:hover::after {
          width: 200px;
          height: 200px;
        }

        .btn-register i {
          font-size: 1.1rem;
          background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 3s ease-in-out infinite;
          transition: all 0.3s ease;
        }

        .btn-register:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }

        .register-links {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 1rem;
        }

        .link-text {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
        }

        .link-text:hover {
          color: #4ecdc4;
          transform: translateX(5px);
        }

        .link-text i {
          font-size: 0.8rem;
        }

        .hero-visual {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .app-showcase {
          position: relative;
          max-width: 900px;
          perspective: 1000px;
        }

        .app-screenshot {
          width: 200%;
          height: auto;
          border-radius: 20px;
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.5),
            0 0 0 1px rgba(255, 255, 255, 0.1),
            0 0 50px rgba(78, 205, 196, 0.3),
            0 0 100px rgba(255, 107, 107, 0.2);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          transform: rotateY(-5deg) rotateX(5deg) translateZ(20px);
          filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3));
          animation: float3D 6s ease-in-out infinite;
        }

        .app-screenshot:hover {
          transform: rotateY(-10deg) rotateX(10deg) translateZ(40px) scale(1.05);
          box-shadow: 
            0 30px 60px rgba(0, 0, 0, 0.6),
            0 0 0 1px rgba(255, 255, 255, 0.2),
            0 0 80px rgba(78, 205, 196, 0.5),
            0 0 150px rgba(255, 107, 107, 0.3);
        }

        /* Animations */
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          25% { background-position: 100% 50%; }
          50% { background-position: 100% 100%; }
          75% { background-position: 0% 100%; }
        }

        @keyframes subtleMove {
          0%, 100% { 
            transform: translate(0, 0);
            opacity: 0.5;
          }
          50% { 
            transform: translate(-1%, -1%);
            opacity: 0.8;
          }
        }

        @keyframes float3D {
          0%, 100% {
            transform: rotateY(-5deg) rotateX(5deg) translateZ(20px) translateY(0px);
          }
          50% {
            transform: rotateY(-8deg) rotateX(8deg) translateZ(30px) translateY(-10px);
          }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }

          .title-main {
            font-size: 3rem;
          }

          .hero-description {
            font-size: 1rem;
          }

          .register-form-container {
            padding: 1.5rem;
          }

          .app-screenshot {
            width: 150%;
            animation: float3DMobile 6s ease-in-out infinite;
          }

          @keyframes float3DMobile {
            0%, 100% {
              transform: rotateY(-3deg) rotateX(3deg) translateZ(10px) translateY(0px);
            }
            50% {
              transform: rotateY(-5deg) rotateX(5deg) translateZ(15px) translateY(-5px);
            }
          }
        }

        @media (max-width: 480px) {
          .title-main {
            font-size: 2.5rem;
          }

          .register-form-container {
            padding: 1rem;
          }

          .form-input {
            padding: 0.8rem 1rem;
          }

          .btn-register {
            padding: 0.8rem 1.5rem;
            font-size: 0.9rem;
          }
        }
      `})]})}export{j as default};
