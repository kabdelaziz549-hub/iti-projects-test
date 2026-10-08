export default function About(){
  return (
    <div style={{
      height:'80vh',
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      textAlign:'center',
      color:'#000'
    }}>
      <h2 style={{fontSize:'28px', fontWeight:'500', margin:0, color:'#000'}}>تم تصميم الموقع بواسطة</h2>
      <h1 style={{fontSize:'38px', fontWeight:'900', margin:'10px 0 25px', color:'#000'}}>Eng: Kareem Abd El Aziz</h1>
      
      <p style={{fontSize:'16px', color:'#000', lineHeight:'1.7', maxWidth:'450px', margin:0}}>
      كيموو لتحويل الحلم الي حقيقه
      </p>
    </div>
  )
}