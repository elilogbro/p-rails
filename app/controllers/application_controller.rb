class ApplicationController < ActionController::API

    protect_from_forgery with::exception
    def not_found_method
      render file: Rails.public_path.join('404.html'), status: :not_found, layout: false
    end
end