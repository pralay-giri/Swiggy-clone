import useFetchAllSearchResult from "../utils/useFetchAllSearchResult";

const ShowResult = (props) => {
    const { query } = props;
    const { data, isError, isLoadding } = useFetchAllSearchResult(query);
    console.log(data);
    return (
        <div>
            {data &&
                data?.map((card, index) => {
                    const restaurent = card?.card?.restaurent?.info;
                    console.log(restaurent);
                    return <p>{restaurent?.name}</p>;
                })}
        </div>
    );
};

export default ShowResult;