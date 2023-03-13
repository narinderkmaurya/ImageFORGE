import React, { useEffect, useState } from 'react';
import ScrollToTop from "react-scroll-to-top";
import { Hero,Card, FormField, Loader } from '../components';

const RenderCards = ({ data, title }) => {
  if (data?.length > 0) {
    return (
      data.map((post) => <Card key={post._id} {...post} />)
    );
  }

  return (
    <h2 className="mt-5 font-manrope  text-pink-300 text-xl ">{title}</h2>
  );
};
const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);

  const [searchText, setSearchText] = useState('');
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState(null);

  const fetchPosts = async () => {
    setLoading(true);

    try {
      const response = await fetch('http://localhost:8080/api/v1/post', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const result = await response.json();
        setAllPosts(result.data.reverse());
      }
    } catch (err) {
      alert(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        const searchResult = allPosts.filter((item) => item.name.toLowerCase().includes(searchText.toLowerCase()) || item.prompt.toLowerCase().includes(searchText.toLowerCase()));
        setSearchedResults(searchResult);
      }, 500),
    );
  };

  return (
    <>
      <Hero/>
      <section className="max-w-7xl lg:bg-gradient-to-b lg:from-black to lg:bg-zinc-900 lg:px-6 lg:py-6 lg:rounded-3xl mx-auto ">
      <div>
        <h1 className="font-extrabold text-center  font-manrope text-white text-[32px] md:text-5xl lg:text-7xl">Most Buzzed Posts</h1>
        <p className="mt-2 text-center md:max-w-full md:text-xl  text-pink-500 text-[14px] lg:text-xl max-w-[500px] lg:max-w-full">Be transported to a world of wonder and magic with a breathtaking selection of images created by the visionary DALL-E AI.</p>
      </div>

      <div className="mt-16 ">
        <FormField
          labelName="Search posts"
          type="text"
          name="text"
          placeholder="Find Something......"
          value={searchText}
          handleChange={handleSearchChange}
        />
      </div>

      <div className="mt-10">
        {loading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <>
            {searchText && (
              <h2 className="font-manrope text-gray-400 text-xl mb-3">
                Results Shown For <span className="text-gray-300">{searchText}</span>:
              </h2>
            )}
            <div className="grid lg:grid-cols-3 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
              {searchText ? (
                <RenderCards
                  data={searchedResults}
                  title="No Results Found for this Keyword" 
                />
              ) : (
                <RenderCards
                  data={allPosts}
                  title="There are no posts yet for this"
                />
              )}
            </div>
          </>
        )}
      </div>
    </section>
    <ScrollToTop smooth color='black' width='40' viewBox='0 0 256 256' style={{borderRadius:'20px',background:"white"}} />
    </>
  )
}

export default Home