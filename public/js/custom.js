$("#example2").DataTable({
  paging: true,
  lengthChange: false,
  searching: false,
  ordering: true,
  info: true,
  autoWidth: false,
  responsive: true,
  pageLength: 10,
  scrollY: "500px",
  scrollCollapse: true,
  // ajax: {
  //   url: "/upload-csv/bulkadd",
  //   type: "GET",
  //   dataType: "json",
  // },
  // columns: [{ data: "file_name" },{ data: "date" }, { data: "_id" }],
  // columnDefs: [
  //   {
  //     targets: [1],
  //     render: function (data, type, row, meta) {
  //       return `<a class="btn btn-sm btn-clean btn-icon btn-icon-md" href="/upload-csv/deletebrand/${row._id}"><i class="fa fa-trash"></i></a>`
  //     },
  //   },
  // ],

})
$("#example3").DataTable({
  paging: true,
  searching: true,
  responsive: true,
  pageLength: 10,
  scrollY: "500px",
  scrollCollapse: true,
  ajax: {
    url: "/brand-images/getbrandwithimage",
    type: "POST",
    dataType: "json",
  },
  columns: [
    { data: "brand_name" },
    { data: "category" },
    { data: "description" },
    { data: "title" },
    { data: "image" },
    { data: "_id" }
  ],
  columnDefs: [
    {
      targets: [4],
      render: function (data, type, row, meta) {
        var imageUrl = []
        data.map(function (item) {
          imageUrl.push('<img src="' + item + '" width="50px" height="50px">')
        })
        return imageUrl
      },
    },
    {
      targets: [5],
      render: function (data, type, row, meta) {
        return `<a class="btn btn-sm btn-clean btn-icon btn-icon-md" href="/brand-images/deletebrand/${row._id}"><i class="fa fa-trash"></i></a>`
      },
    },
  ],
})
$("#example4").DataTable({
  paging: true,
  searching: true,
  responsive: true,
  pageLength: 10,
  scrollY: "500px",
  scrollCollapse: true,
  ajax: {
    url: "/image-category/getimagecategories",
    type: "POST",
    dataType: "json",
    columnsDef: ["category", "_id"],
  },
  columns: [{ data: "category" }, { data: "_id" }],
  columnDefs: [
    {
      targets: 1,
      render: function (data, type, row, meta) {
        var rowData = encodeURIComponent(JSON.stringify(row))
        return `<a href="#kt_edit" data-toggle="modal" onclick="${rowData}" data-id=""  class="btn btn-sm btn-clean btn-icon btn-icon-md" title="Edit">
                          <i class="fa fa-edit" ></i>
                 </a> 
                <a class="btn btn-sm btn-clean btn-icon btn-icon-md" href="/image-category/deleteCategory/${row._id}"><i class="fa fa-trash"></i></a>`
      },
    },
  ],
})
$("#example5").DataTable({
  paging: false,
  searching: true,
  responsive: true,
  pageLength: 5,
  scrollY: "500px",
  scrollCollapse: true,
})
$("#example6").DataTable({
  paging: true,
  searching: true,
  responsive: true,
  pageLength: 10,
  scrollY: "500px",
  scrollCollapse: true,
  ajax: {
    url: "/product-images/get_Image_Data",
    type: "GET",
    dataType: "json",
  },
  columns: [{ data: "aw_product_id" }, { data: "image" },{ data: "_id" }],
  columnDefs: [
    {
      targets: [1],
      render: function (data, type, row, meta) {
        var imageUrl = []
        data.map(function (item) {
          imageUrl.push('<img src="' + item + '" width="50px" height="50px">')
        })
        return imageUrl
      },
    },
    {
      targets: [2],
      render: function (data, type, row, meta) {
        return `<a class="btn btn-sm btn-clean btn-icon btn-icon-md" href="/product-images/deletebrand/${row._id}"><i class="fa fa-trash"></i></a>`
      },
    },
  ],
})

$("#example7").DataTable({
  paging: true,
  searching: true,
  responsive: true,
  pageLength: 10,
  scrollY: "500px",
  scrollCollapse: true,
  ajax: {
    url: "/category-select/get_brand_with_Images",
    type: "GET",
    dataType: "json",
  },
  columns: [{ data: "brand_name" }, { data: "image" }, { data: "_id" }],
  columnDefs: [
    {
      targets: [1],
      render: function (data, type, row, meta) {
        var imageUrl = []
        data.map(function (item) {
          imageUrl.push('<img src="' + item + '" width="50px" height="50px">')
        })
        return imageUrl
      },
    },
    {
      targets: [2],
      render: function (data, type, row, meta) {
        return `<a class="btn btn-sm btn-clean btn-icon btn-icon-md" href="/category-select/deletecategory/${row._id}"><i class="fa fa-trash"></i></a>`
      },
    },
  ],
})

$("#example8").DataTable({
  paging: true,
  searching: true,
  responsive: true,
  pageLength: 10,
  scrollY: "500px",
  scrollCollapse: true,
  ajax: {
    url: "/collections/getallcollections",
    type: "POST",
    dataType: "json",
  },
  columns: [{ data: "brand_name" }, { data: "keyword" }, { data: "_id" }],
  columnDefs: [
    {
      targets: [2],
      render: function (data, type, row, meta) {
        return `<a class="btn btn-sm btn-clean btn-icon btn-icon-md" href="/collections/deletecollection/${row._id}"><i class="fa fa-trash"></i></a>`
      },
    },
  ],
})

$("#example9").DataTable({
  paging: true,
  searching: true,
  responsive: true,
  pageLength: 10,
  scrollY: "500px",
  scrollCollapse: true,
  ajax: {
    url: "/top-sellers/get_top_seller",
    type: "GET",
    dataType: "json",
  },
  columns: [{ data: "top_seller" },{ data: "brand_type" }, { data: "_id" }],
  columnDefs: [
    {
      targets: [2],
      render: function (data, type, row, meta) {
        return `<a class="btn btn-sm btn-clean btn-icon btn-icon-md" href="/top-sellers/deletebrand/${row._id}"><i class="fa fa-trash"></i></a>`
      },
    },
  ],
})

$("#example13").DataTable({
  paging: true,
  searching: true,
  responsive: true,
  pageLength: 10,
  scrollY: "500px",
  scrollCollapse: true,
  ajax: {
    url: "/top-pre-own-sellers/get_top_seller",
    type: "GET",
    dataType: "json",
  },
  columns: [{ data: "top_seller" },{ data: "brand_type" }, { data: "_id" }],
  columnDefs: [
    {
      targets: [2],
      render: function (data, type, row, meta) {
        return `<a class="btn btn-sm btn-clean btn-icon btn-icon-md" href="/top-pre-own-sellers/deletebrand/${row._id}"><i class="fa fa-trash"></i></a>`
      },
    },
  ],
})
// url: "/top-Jewellery/get_top_jewellery",
$("#example10").DataTable({
  paging: true,
  searching: true,
  responsive: true,
  pageLength: 10,
  scrollY: "500px",
  scrollCollapse: true,
  ajax: {
    url: "/top-Jewellery/get_top_jewellery",
    type: "GET",
    dataType: "json",
  },
  columns: [{ data: "top_seller_jewellery" }, { data: "image" }, { data: "_id" }],
  columnDefs: [
    {
      targets: [1],
      render: function (data, type, row, meta) {
        var imageUrl = []
        data.map(function (item) {
          imageUrl.push('<img src="' + item + '" width="50px" height="50px">')
        })
        return imageUrl
      },
    },
    {
      targets: [2],
      render: function (data, type, row, meta) {
        return `<a class="btn btn-sm btn-clean btn-icon btn-icon-md" href="/top-Jewellery/deletebrand/${row._id}"><i class="fa fa-trash"></i></a>`
      },
    },
  ],
})

function editCategory(data) {
  console.log(data)
  var prevData = JSON.parse(decodeURIComponent(data))
  console.log(prevData)
  // $('#kt_edit').modal('show')
}

$("#kt_edit").on("click", function () {
  $("#kt_edit").modal("show")
})

$("#example1").DataTable({
  paging: true,
  responsive: true,
  processing: true,
  serverSide: true,
  searching: true,
  pagination: true,
  scrollY: "500px",
  scrollCollapse: true,
  ajax: {
    url: "/product-table/gettabledata",
    type: "POST",
    dataType: "json",
  },
  columns: [
    { data: "product_name" },
    { data: "aw_product_id" },
    { data: "merchant_product_id" },
    { data: "merchant_image_url" },
    { data: "description" },
    { data: "merchant_category" },
    { data: "search_price" },
    { data: "merchant_name" },
    { data: "merchant_id" },
    { data: "category_name" },
    { data: "category_id" },
    { data: "aw_image_url" },
    { data: "currency" },
    { data: "store_price" },
    { data: "delivery_cost" },
    // { data: "merchant_deep_link" },
    // { data: "language" },
    { data: "last_updated" },
    // { data: "display_price" },
    { data: "data_feed_id" },
    { data: "brand_name" },
    { data: "brand_id" },
    { data: "colour" },
    { data: "product_short_description" },
    { data: "specifications" },
    { data: "condition" },
    { data: "product_model" },
    { data: "model_number" },
    { data: "dimensions" },
    { data: "keywords" },
    { data: "promotional_text" },
    { data: "product_type" },
    { data: "commission_group" },
    { data: "merchant_product_category_path" },
    { data: "merchant_product_second_category" },
    { data: "merchant_product_third_category" },
  
    { data: "saving" },
    { data: "savings_percent" },
    { data: "base_price" },
    { data: "base_price_amount" },
    { data: "base_price_text" },
    { data: "product_price_old" },
    { data: "delivery_restrictions" },
    { data: "delivery_weight" },
    { data: "warranty" },
    { data: "terms_of_contract" },
    { data: "delivery_time" },
    { data: "in_stock" },
    { data: "stock_quantity" },
    { data: "valid_from" },
    { data: "valid_to" },
    { data: "is_for_sale" },
    { data: "web_offer" },
    { data: "pre_order" },
    { data: "stock_status" },
    { data: "size_stock_status" },
    { data: "size_stock_amount" },
    { data: "merchant_thumb_url" },
    { data: "large_image" },
    { data: "alternate_image" },
    { data: "aw_thumb_url" },
    { data: "alternate_image_two" },
    { data: "alternate_image_three" },
    { data: "alternate_image_four" },
    { data: "reviews" },
    { data: "average_rating" },
    { data: "rating" },
    { data: "number_available" },
    { data: "custom_1" },
    { data: "custom_2" },
    { data: "custom_3" },
    { data: "custom_4" },
    { data: "custom_5" },
    { data: "custom_6" },
    { data: "custom_7" },
    { data: "custom_8" },
    { data: "custom_9" },
    { data: "ean" },
    { data: "isbn" },
    { data: "upc" },
    { data: "mpn" },
  
    { data: "product_GTIN" },
    { data: "basket_link" },
    { data: "_id" },
  ],
  columnDefs: [
    
    {
      targets: 0,
      render: function (data, type, row, meta) {
        return `<a class="btn btn-sm btn-clean btn-icon btn-icon-md" href="/product-table/deletebrand/${row._id}"><i class="fa fa-trash"></i></a>`
      },
    },
    {
      targets: 1,
      render: function (data, type, full, meta) {
        // return full.description;
        return (
          '<span data-toggle="tooltip" title="' +
          data +
          '" style="overflow: hidden;width: 100px;display: -webkit-box;-webkit-line-clamp : 1; -webkit-box-orient: vertical ; margin-top: 15px" >' +
          full.product_name +
          "</span>"
        )
      },
    },
    {
      targets: 3,
      render: function (data, type, full, meta) {
        return '<img src="' + data + '" alt="image here" style=" width:80px; height:50px" />'
      },
    },
    {
      targets: 4,
      render: function (data, type, full, meta) {
        // return full.description;
        return (
          '<span data-toggle="tooltip" title="' +
          data +
          '" style="overflow: hidden;width: 100px;display: -webkit-box;-webkit-line-clamp : 1; -webkit-box-orient: vertical" >' +
          full.description +
          "</span>"
        )
      },
    },
    {
      targets: 11,
      render: function (data, type, full, meta) {
        return '<img src="' + data + '" alt="image here" width="50px" height="50px">'
      },
    },
    {
      targets: 55,
      render: function (data, type, full, meta) {
        return '<img src="' + data + '" alt="image here" style=" width:80px; height:50px" />'
      },
    },
    {
      targets: 56,
      render: function (data, type, full, meta) {
        return '<img src="' + data + '" alt="image here" style=" width:80px; height:50px" />'
      },
    },
    {
      targets: 57,
      render: function (data, type, full, meta) {
        return '<img src="' + data + '" alt="image here" style=" width:80px; height:50px" />'
      },
    },
    {
      targets: 58,
      render: function (data, type, full, meta) {
        return '<img src="' + data + '" alt="image here" style=" width:80px; height:50px" />'
      },
    },
    {
      targets: 59,
      render: function (data, type, full, meta) {
        return '<img src="' + data + '" alt="image here" style=" width:80px; height:50px" />'
      },
    },
    {
      targets: 60,
      render: function (data, type, full, meta) {
        return '<img src="' + data + '" alt="image here" style=" width:80px; height:50px" />'
      },
    },
    {
      targets: 61,
      render: function (data, type, full, meta) {
        return '<img src="' + data + '" alt="image here" style=" width:80px; height:50px" />'
      },
    },
  ],
})

Dropzone.autoDiscover = false
// $('#kt_dropzone_1').dropzone({
//   url: "/upload-csv", // Set the url for your upload script location
//   paramName: "file", // The name that will be used to transfer the file
//   maxFiles: 1,
//   maxFilesize: 5, // MB
//   addRemoveLinks: true,
//   accept: function(file, done) {
//     if (file.name == "justinbieber.jpg") {
//       done("Naha, you don't.");
//     } else {
//       done();
//     }
//   }
// })

var previewNode = document.querySelector("#template")
previewNode.id = ""
var previewTemplate = previewNode.parentNode.innerHTML
previewNode.parentNode.removeChild(previewNode)

var myDropzone = new Dropzone(document.body, {
  // Make the whole body a dropzone
  url: "/upload-csv", // Set the url
  thumbnailWidth: 80,
  paramName: "file",
  maxFilesize: 0, // MB
  thumbnailHeight: 80,
  parallelUploads: 20,
  previewTemplate: previewTemplate,
  autoQueue: false, // Make sure the files aren't queued until manually added
  previewsContainer: "#previews", // Define the container to display the previews
  clickable: ".fileinput-button", // Define the element that should be used as click trigger to select files.
})

myDropzone.on("addedfile", function (file) {
  // Hookup the start button
  file.previewElement.querySelector(".start").onclick = function () {
    myDropzone.enqueueFile(file)
  }
})

// Update the total progress bar
myDropzone.on("totaluploadprogress", function (progress) {
  document.querySelector("#total-progress .progress-bar").style.width = progress + "%"
})

myDropzone.on("sending", function (file) {
  // Show the total progress bar when upload starts
  document.querySelector("#total-progress").style.opacity = "1"
  // And disable the start button
  // file.previewElement.querySelector(".start").setAttribute("disabled", "disabled")
})

// Hide the total progress bar when nothing's uploading anymore
myDropzone.on("queuecomplete", function (progress) {
  location.reload()
  $("#example2").DataTable().ajax.reload()
  document.querySelector("#total-progress").style.opacity = "0"
})



// Setup the buttons for all transfers
// The "add files" button doesn't need to be setup because the config
// `clickable` has already been specified.
document.querySelector("#actions .start").onclick = function () {
  myDropzone.enqueueFiles(myDropzone.getFilesWithStatus(Dropzone.ADDED))
}
document.querySelector("#actions .cancel").onclick = function () {
  myDropzone.removeAllFiles(true)
}
