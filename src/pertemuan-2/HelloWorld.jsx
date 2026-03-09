export default function HelloWorld(){ 
     const propsUserCard = {
        nama: "Goku🤷‍♂️",
        nim: "999999",
        tanggal: "2025-01-01"
    }

    return (
        <div>
            <h1>Hello World</h1>
            <p>Selamat Belajar ReactJs</p>
            <GreetingBinjai/>
            <GreetingBinjai/>
            <GreetingBinjai/>
            {/* <QuoteText/> */}

            <UserCard 
	            nama="Shofii😺" 
	            nim="2457301130"
	            tanggal={new Date().toLocaleDateString()}
	          />
            <UserCard 
	            nama="Aliyah🐸" 
	            nim="2457301010"
	            tanggal="01/01/2025"
	          />

             <UserCard {...propsUserCard}/>

          
        </div>
    )
}

function QuoteText() {
    const text = "Mulutmu Harimaumu";
    const text2 = "Aku ingin jadi macan";
    return (
        <div>
            <hr/>
            <p>{text.toLowerCase()}</p>
            <p>{text2.toUpperCase()}</p>
        </div>
    )
}

function GreetingBinjai(){
    return (
        <small>Salam dari Binjai👋🏻</small>
    )
}

function UserCard(props){
    return (
        <div>
            <hr/>
            <h3>Nama: {props.nama}</h3>
            <p>NIM: {props.nim}</p>
            <p>Tanggal: {props.tanggal}</p>
        </div>
    )
}