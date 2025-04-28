import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { productByIdApi, productsRelatedByIdApi } from '../../../redux/actions/Action';
import { useDispatch, useSelector } from 'react-redux';
import Breadcrumb from '../../../components/breadcrumb/BreadCrumb';
import { Link } from 'react-router-dom';

function ProductDetails() {
    const dispatch = useDispatch()
    const { id } = useParams()

    const { productById, productsRelatedById } = useSelector((state) => state.product)

    useEffect(() => {
        dispatch(productByIdApi(id))
        dispatch(productsRelatedByIdApi(id))
    }, [id, dispatch])

    return (
        <div>
            <div className='text-[.55rem]'>
                <Breadcrumb />
            </div>
            <div className="px-5 flex flex-col md:flex-row gap-6">
                {/* Product Image */}
                <div className="flex-1">
                    {productById?.images?.[0] && (
                        <img
                            src={productById.images[0]}
                            alt={productById?.title || 'Product image'}
                            className="w-full h-auto max-h-[400px] md:h-[320px] object-contain rounded-xl bg-gray-50 p-4 border"
                        />
                    )}
                </div>

                {/* Product Info */}
                <div className="flex-1 flex flex-col">
                    <h1 className="text-2xl font-bold text-gray-900">{productById?.title}</h1>

                    <div className="my-4">
                        <h2 className="text-lg font-semibold text-gray-800 border-b pb-1">Details</h2>

                        <div className="flex gap-8 my-4">
                            <div className="flex flex-col">
                                <p className="text-xs text-gray-500 uppercase tracking-wider">Price</p>
                                <p className="text-lg font-medium text-gray-900">${productById?.price}</p>
                            </div>

                            <div className="flex flex-col">
                                <p className="text-xs text-gray-500 uppercase tracking-wider">Release Date</p>
                                <p className="text-sm font-light text-gray-700">
                                    {new Date(productById?.creationAt).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4">
                        <h2 className="text-lg font-semibold text-gray-800 border-b pb-1">Description</h2>
                        <p className="mt-3 text-gray-700 leading-relaxed">
                            {productById?.description}
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-full">
                <div className="flex flex-wrap gap-4 p-5">
                    {productsRelatedById.map((related) => (
                        <div
                            key={related.id}
                            className="flex flex-col gap-2 w-full sm:w-[calc(50%-1rem)] md:w-[calc(25%-1rem)] lg:w-[calc(25%-1rem)] xl:w-[calc(20%-1rem)]"
                        >
                            <Link to={`/details/${related.id}`}>
                                {related?.images?.[0] && (
                                    <img
                                        src={related.images[0]}
                                        alt={related?.title || 'Related product'}
                                        className="w-full h-48 object-cover rounded-lg hover:opacity-90 transition-opacity"
                                    />
                                )}
                            </Link>
                            <div className="p-2">
                                <p className="font-medium text-gray-800 line-clamp-2">{related?.title}</p>
                                <p className="text-lg font-semibold text-gray-900">${related?.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductDetails