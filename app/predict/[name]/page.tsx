const predictAge = async(name:string) => {
  const res = await fetch(`https://api.agify.io?name=${name}`);
  const data = await res.json();
  return data;
}

const predictGender = async(name:string) => {
  const res = await fetch(`https://api.genderize.io?name=${name}`);
  const data = await res.json();
  return data;
}

const predictCountry = async(name:string) => {
  const res = await fetch(`https://api.nationalize.io?name=${name}`);
  const data = await res.json();
  return data;
}

interface Params{
  params: {name: string}
}


export default async function Page({ params }: Params) {
  const { name } = await params;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-white">
      <div className="absolute top-5 left-5">
        <a href="/" className="text-blue-400 underline">Go Back</a>
      </div>
      <div>
        <h1 className="text-4xl font-bold">Predictions for {name}</h1>
      </div>
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Age Prediction:</h2>
        <p className="bg-gray-800 p-4 rounded">
          {JSON.stringify((await predictAge(name)).age, null, 2)}
        </p>
      </div>
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Gender Prediction:</h2>
        <p className="bg-gray-800 p-4 rounded">
          {JSON.stringify((await predictGender(name)).gender, null, 2)}
        </p>
      </div>
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Country Prediction:</h2>
        <p className="bg-gray-800 p-4 rounded">
          {JSON.stringify((await predictCountry(name)).country[0].country_id, null, 2)}
        </p>
      </div>
    </main>
  );
}
