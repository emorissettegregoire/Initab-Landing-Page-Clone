class PagesController < ApplicationController

  def home
    @lists
    @redditcards
    @issuecards
    @prcards

  end

  def index

  end
end
