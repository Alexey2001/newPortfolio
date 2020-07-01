import React from 'react'
import Hero from '../components/Hero'
import Content from '../components/Content';
function AboutPage(props) {
        return(
           <div>
               <Hero title={props.title}/>

               <Content>
               <p>Здравствуйте, меня зовут Алексей.</p>
               <p> Я Front end разработчик пишущий на  React и Redux. </p>
               <p> Я постоянно изучаю новые вещи. в настоящее время эти вещи включают в себя получение большего опыта с MongoDB, React, Express, GraphQL, Apollo Client и Node JS.</p>
               <p> Я мечтаю однажды начать свой собственный бизнес и стать предпринимателем (в настоящее время работаю над некоторыми идеями).</p> 
               </Content>
           </div>
        )
}

export default AboutPage;