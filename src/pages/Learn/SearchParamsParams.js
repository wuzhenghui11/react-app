import { useParams, useSearchParams } from 'react-router-dom';

function SearchParamsParams () {
  const params = useParams()
  const [searchParams] = useSearchParams()
  console.log(params.id);
  console.log(searchParams.get('aa'));
  return (
    <div>
      我是用来熟悉 params 和 searchParams 的
      {params.id} {searchParams.get('aa')}
    </div>
  )
}

export default SearchParamsParams
