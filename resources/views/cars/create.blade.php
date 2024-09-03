<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Create Page</title>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body>
    <div class="card">
        <div class="card-header">{{ __('Add New Car') }}</div>

        <div class="card-body">

            <form action="/cars/create" method="post" enctype="multipart/form-data">
                @csrf

                <div class="mb-3">
                    <label for="model" class="form-label">
                        Model
                    </label>
                    <input type="text" class="form-control" id="model" name="model">
                </div>

                <div class="mb-3">
                    <label for="brand" class="form-label">
                        Brand
                    </label>
                    <input type="text" class="form-control" id="brand" name="brand">
                </div>

                <div class="mb-3">
                    <label for="seater" class="form-label">
                        Seater
                    </label>
                    <input type="number" class="form-control" id="seater" name="seater">
                </div>

                <div class="mb-3">
                    <label for="price" class="form-label">
                        Price
                    </label>
                    <input type="number" class="form-control" id="price" name="price">
                </div>

                <div class="mb-3">
                    <label for="image" class="form-label">
                        Image
                    </label>
                    <input type="file" class="form-control" id="image" name="image">
                </div>

                <div class="mb-3">
                    <button class="btn btn-primary">
                        Submit
                    </button>
                </div>
            </form>

        </div>
    </div>
</body>
</html>
