import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import { productsByCategoryApi } from '../../../redux/actions/Action';
import Breadcrumb from '../../../components/breadcrumb/BreadCrumb';

function ProductsByCategory() {

    const { productsByCategory } = useSelector((state) => state.product)

    const { id } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(productsByCategoryApi(id))
    }, [id, dispatch])

    return (
        <div className='flex flex-col'>
            <div className='text-[.55rem]'><Breadcrumb /></div>
            <div className='flex flex-col px-5 gap-10 py-4'>
                {productsByCategory.map((item) => (
                    <div className='flex flex-col gap-2 flex-wrap'>
                        <p>{item.title}</p>
                        <div className='flex flex-row gap-6'>
                            {item?.images?.map((img) => (
                                <Link to={`/details/${item.id}` }>
                                    <img
                                    key={img.id}
                                        src={img}
                                        alt='images'
                                        className='rounded-full bg-amber-500 w-24 h-24 object-cover'
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductsByCategory