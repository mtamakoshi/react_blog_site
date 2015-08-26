class Post < ActiveRecord::Base
  has_many :photo
  has_attached_file :photo, :styles => { :medium => "300x300>", :thumb => "100x100>", :big => "600x340>" }, :default_url => "/images/missing.png", :url => "/assets/photo/:id/:style/:basename.:extenstion", :path => "#{Rails.root}/public/assets/photo/:id/:style/:basename.:extenstion"
  validates_attachment_content_type :photo, :content_type => /\Aimage\/.*\Z/

end
